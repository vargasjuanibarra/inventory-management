/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3-storage-inventory-management.s3.ap-southeast-1.amazonaws.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
