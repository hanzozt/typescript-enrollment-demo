import { enroll } from '@hanzozt/zt-sdk-nodejs';

const ztEnrollTokenFile: string = process.env.ZITI_ENROLL_TOKEN_FILE ?? ''; // Assign the value of the environment variable or default to an empty string
// const ztIdentityFiles: string = process.env.ZITI_IDENTITIES ?? ''; // semi-colon-separated list of identity files or default to an empty string
// const ztIdentityFile: string = ztIdentityFiles.split(";")[0]; // get the first identity file

if (!ztEnrollTokenFile) {
    console.error("Error: ZITI_ENROLL_TOKEN_FILE environment variable is not set.");
    process.exit(0);
}

async function main() {
    try {
        const result = await enroll(ztEnrollTokenFile);
        console.log('Enrollment successful:', result);
    } catch (error) {
        console.error('Enrollment failed:', error);
    }
}

main();
