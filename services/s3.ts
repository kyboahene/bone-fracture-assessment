import axios from "axios";

export async function getData() {
    const res = await axios.get("/api/s3")
    return res.data;
}