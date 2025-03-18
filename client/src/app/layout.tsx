export default function RootLayout({
                                       children,
                                   }: {
    // @ts-ignore
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}