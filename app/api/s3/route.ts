import AWS from "aws-sdk"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

AWS.config.region = "eu-central-1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "eu-central-1:31ebe2ab-fc9d-4a2c-96a9-9dee9a9db8b9",
});

const s3 = new AWS.S3();

export async function GET() {

    const params = {
        Bucket: 'dataspan.frontend-home-assignment',
        Key: 'bone-fracture-detection/',
    };

    const data = await s3.getObject(params).promise();
    return NextResponse.json(data);
}