import AWS from 'aws-sdk'
import { NextResponse } from "next/server";
import { getImageNameFromKey } from "@/lib/utils";

AWS.config.update({
    region: 'eu-central-1',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'eu-central-1:31ebe2ab-fc9d-4a2c-96a9-9dee9a9db8b9',
    }),
});

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'dataspan.frontend-home-assignment' },
}) as any;


export async function GET() {
    const albumName = 'bone-fracture-detection'

    try {
        const albumBucketName = 'dataspan.frontend-home-assignment';
        const albumPhotosKey = encodeURIComponent(albumName as string) + "/"
        const data = await s3.listObjects({ Prefix: albumPhotosKey }).promise()

        console.log(data)

        let testData = await s3.listObjects({ Prefix: albumPhotosKey + "test/images" }).promise();
        let trainData = await s3.listObjects({ Prefix: albumPhotosKey + "train/images" }).promise();
        let validData = await s3.listObjects({ Prefix: albumPhotosKey + "valid/images" }).promise();

        const bucketUrl = s3.getSignedUrl('getObject', {
            Bucket: albumBucketName,
            Key: data.Contents.length > 0 ? data.Contents[0].Key : ''
        });

        const href = new URL(bucketUrl);
        const hostName = href.hostname;
        const baseUrl = `https://${hostName}/${albumBucketName}/`;

        testData = testData.Contents.slice(0, 200).map((photo: any) => ({
            key: photo.Key,
            image: `${baseUrl}${encodeURIComponent(photo.Key)}`,
            name: getImageNameFromKey(photo.Key)
        }));

        trainData = trainData.Contents.slice(0, 200).map((photo: any) => ({
            key: photo.Key,
            image: `${baseUrl}${encodeURIComponent(photo.Key)}`,
            name: getImageNameFromKey(photo.Key)
        }));

        validData = validData.Contents.slice(0, 200).map((photo: any) => ({
            key: photo.Key,
            image: `${baseUrl}${encodeURIComponent(photo.Key)}`,
            name: getImageNameFromKey(photo.Key)
        }));

        return NextResponse.json({
            allGroups: [...testData, ...trainData, ...validData],
            test: testData,
            train: trainData,
            valid: validData,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}