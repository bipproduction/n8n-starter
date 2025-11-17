import { execSync } from "node:child_process";
const NAMESPACE = process.env.NAMESPACE

if (!NAMESPACE) {
    throw new Error('NAMESPACE is required')
}

// 1. Ambil versi remote dari npm
const remoteVersion = execSync(`npm view n8n-nodes-${NAMESPACE} version`)
  .toString()
  .trim();

console.log("🔍 Remote version:", remoteVersion);

// 2. Pecah versi → major.minor.patch
const [major, minor, patch] = remoteVersion.split(".").map(Number);

// 3. Generate versi baru: remote + 1 patch
const newLocalVersion = `${major}.${minor}.${patch + 1}`;

console.log("⬆️  New local version:", newLocalVersion);

// 4. Update package.json di folder src
execSync(`cd src && npm version ${newLocalVersion} --allow-all --force`, {
  stdio: "inherit",
});
