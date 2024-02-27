import { NextResponse } from "next/server";
import AWS from 'aws-sdk';

// s3://dataspan.frontend-home-assignment/bone-fracture-detection/ 

export async function GET() {
    AWS.config.region = "eu-central-1";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "eu-central-1:31ebe2ab-fc9d-4a2c-96a9-9dee9a9db8b9",
    });

    const s3 = new AWS.S3();
    const params = {
        Bucket: 'dataspan.frontend-home-assignment',
        Key: 'bone-fracture-detection'
    };

    try {
        const result = await s3.getObject(params).promise();
        if (result.Body) {
            const jsonData = JSON.parse(result.Body.toString('utf-8'));

            console.log(jsonData)
            return NextResponse.json({
                data: jsonData
            });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error });
    }
}


