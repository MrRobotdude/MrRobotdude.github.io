const {spawnSync}=require('child_process');
const target=process.argv[2];
if(!['start','build','test'].includes(target))throw Error('Unsupported build command');
const env={...process.env};
// The original asset pipeline still uses legacy OpenSSL hashes for build IDs.
// This is a build-tool compatibility flag, not application authentication.
if(Number(process.versions.node.split('.')[0])>=17)env.NODE_OPTIONS=[env.NODE_OPTIONS,'--openssl-legacy-provider'].filter(Boolean).join(' ');
if(target==='build')env.GENERATE_SOURCEMAP='false';
const result=spawnSync(process.execPath,[require.resolve('react-scripts/scripts/'+target),...process.argv.slice(3)],{stdio:'inherit',env});
if(result.error)throw result.error;
process.exit(result.status??1);
