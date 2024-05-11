/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: false  // 强制所有导入的外部依赖使用 CommonJS，这可以帮助处理一些兼容性问题。
    }
};

export default nextConfig;
