import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
	display: "swap",
})

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Car-Organize | Premium Car Storage Solutions",
	description: "Organize the Heat. Control the Drive. Premium car organizers built for energy, speed, and precision.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${orbitron.variable} ${montserrat.variable}`}>
			<body className={`font-mono antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
