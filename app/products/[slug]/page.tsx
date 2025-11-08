"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Check, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const products = [
	{
		id: 1,
		slug: "thisworx-vacuum-drive-organizer",
		name: "ThisWorx Vacuum & Drive Organizer Bundle",
		price: "$39.99",
		rating: 4.5,
		reviews: 1500,
		image: "https://m.media-amazon.com/images/I/51m9x9FDwhL._AC_SX679_.jpg",
		features: ["Car vacuum included", "Multiple compartments", "Collapsible design", "Portable"],
		description:
			"The ThisWorx Vacuum & Drive Organizer Bundle is a versatile solution for keeping your car tidy. This bundle includes a powerful car vacuum and a collapsible organizer with multiple compartments, ideal for storing groceries, tools, or travel essentials. Its portable design ensures easy setup and storage.",
		detailedFeatures: [
			"High-powered 12V car vacuum included",
			"3 spacious compartments with dividers",
			"Collapsible design for easy storage",
			"Lightweight and portable (3 lbs)",
			"Durable 600D polyester construction",
			"Side pockets for additional storage",
			'Dimensions: 23" x 13" x 10"',
			"Vacuum with 16-ft cord for easy reach",
		],
		amazonLink: "https://amzn.to/3Jz7olT",
	},
	{
		id: 2,
		slug: "fortem-car-trunk-organizer",
		name: "FORTEM Car Trunk Organizer",
		price: "$34.99",
		rating: 4.7,
		reviews: 2500,
		image: "https://m.media-amazon.com/images/I/81tOvk78l4L._AC_SX679_.jpg",
		features: ["Collapsible design", "Securing straps included", "Waterproof material", "Multiple compartments"],
		description:
			"The FORTEM Car Trunk Organizer is designed for durability and convenience. Made from waterproof material, it features a collapsible design with securing straps to keep it in place. With multiple compartments, it’s perfect for organizing groceries, sports gear, or emergency supplies.",
		detailedFeatures: [
			"Waterproof 600D Oxford fabric",
			"3 adjustable compartments with removable dividers",
			"Non-slip securing straps for stability",
			"Collapsible to 2-inch thickness",
			"Reinforced base for added strength",
			"Side mesh pockets for small items",
			'Dimensions: 22" x 14" x 11"',
			"Includes bonus storage lid",
		],
		amazonLink: "https://amzn.to/4ou3Wbg",
	},
	{
		id: 3,
		slug: "honey-can-do-trunk-organizer",
		name: "Honey-Can-Do Folding Trunk Organizer",
		price: "$29.99",
		rating: 4.6,
		reviews: 1200,
		image: "https://m.media-amazon.com/images/I/710cSVDC-3L._AC_SX679_.jpg",
		features: ["Foldable design", "Durable fabric", "Easy to clean", "Lightweight"],
		description:
			"The Honey-Can-Do Folding Trunk Organizer offers a lightweight and practical solution for car storage. Its foldable design and durable fabric make it easy to use and clean, while the lightweight construction ensures effortless transport. Ideal for daily errands or travel.",
		detailedFeatures: [
			"Durable polyester fabric construction",
			"Easy-to-clean surface",
			"Lightweight at 1.8 lbs",
			"Foldable for compact storage",
			"Reinforced handles for easy carrying",
			"Mesh side pockets for extra storage",
			'Dimensions: 21" x 12" x 10"',
			"Available in black and gray",
		],
		amazonLink: "https://amzn.to/4hSI0UT",
	},
	{
		id: 4,
		slug: "registration-insurance-organizer",
		name: "Registration & Insurance Organizer",
		price: "$19.99",
		rating: 4.8,
		reviews: 800,
		image: "https://m.media-amazon.com/images/I/8178ZCwRyUL._AC_SX679_.jpg",
		features: ["Compact size", "Document protection", "Easy access", "Durable material"],
		description:
			"Keep your important documents safe with the Registration & Insurance Organizer. Its compact size fits easily in your glovebox or console, offering durable protection for registration, insurance, and other essentials. The easy-access design ensures you can quickly retrieve documents when needed.",
		detailedFeatures: [
			"Compact design fits in glovebox",
			"Water-resistant vinyl material",
			"Clear pockets for easy document viewing",
			"Durable stitching for long-term use",
			"Holds up to 10 documents",
			"Zippered closure for security",
			'Dimensions: 9" x 5" x 1"',
			"Sleek black finish",
		],
		amazonLink: "https://amzn.to/3Xko2c0",
	},
	{
		id: 5,
		slug: "gorilla-grip-trunk-organizer",
		name: "Gorilla Grip Travel Trunk Organizer",
		price: "$44.99",
		rating: 4.7,
		reviews: 1800,
		image: "https://m.media-amazon.com/images/I/81cSlvYuHTL._AC_SX679_.jpg",
		features: ["Heavy-duty construction", "Non-slip base", "Large capacity", "Adjustable straps"],
		description:
			"The Gorilla Grip Travel Trunk Organizer is built for rugged use with its heavy-duty construction and large capacity. The non-slip base keeps it securely in place, while adjustable straps ensure versatility. Perfect for road trips, groceries, or outdoor gear storage.",
		detailedFeatures: [
			"Heavy-duty 1680D polyester material",
			"Non-slip rubberized base",
			"Large capacity with 2 main compartments",
			"Adjustable tie-down straps",
			"Collapsible for easy storage",
			"Side handles for easy transport",
			'Dimensions: 24" x 15" x 12"',
			"Weight capacity: 60 lbs",
		],
		amazonLink: "https://amzn.to/47K7LBX",
	},
	{
		id: 6,
		slug: "nishel-travel-organizer",
		name: "NISHEL Full-Sized Travel Organizer",
		price: "$24.99",
		rating: 4.5,
		reviews: 600,
		image: "https://m.media-amazon.com/images/I/81ig0y8oZzL._SX679_.jpg",
		features: ["Travel-size accessory storage", "Multiple pockets", "Durable material", "Portable design"],
		description:
			"The NISHEL Full-Sized Travel Organizer is perfect for keeping travel accessories organized. Its multiple pockets and durable material make it ideal for storing toiletries, electronics, or other essentials. The portable design is great for travel or daily use in smaller vehicles.",
		detailedFeatures: [
			"Durable nylon construction",
			"Multiple interior and exterior pockets",
			"Portable and lightweight (1.2 lbs)",
			"Zippered compartments for secure storage",
			"Water-resistant coating",
			"Quick-access front pocket",
			'Dimensions: 16" x 9" x 8"',
			"Ideal for travel toiletries",
		],
		amazonLink: "https://amzn.to/3WN2WTz",
	},
	{
		id: 7,
		slug: "hotor-trunk-organizer",
		name: "HOTOR Large Capacity Trunk Organizer",
		price: "$49.99",
		rating: 4.8,
		reviews: 2000,
		image: "https://m.media-amazon.com/images/I/91JJ+mKxkFL._AC_SX679_.jpg",
		features: ["Extra-large capacity", "Reinforced walls", "Collapsible", "Water-resistant"],
		description:
			"The HOTOR Large Capacity Trunk Organizer is designed for maximum storage with its extra-large capacity and reinforced walls. Its collapsible and water-resistant design makes it perfect for heavy-duty use, from groceries to camping gear, while keeping your trunk organized.",
		detailedFeatures: [
			"Extra-large 80L capacity",
			"Reinforced 1200D Oxford fabric walls",
			"Water-resistant exterior",
			"Collapsible design with sturdy base",
			"4 adjustable compartments",
			"Heavy-duty handles with grip",
			'Dimensions: 28" x 16" x 13"',
			"Non-slip bottom strips",
		],
		amazonLink: "https://amzn.to/4oGguMI",
	},
	{
		id: 8,
		slug: "breathable-storage-organizer",
		name: "Breathable Storage Organizer",
		price: "$32.99",
		rating: 4.6,
		reviews: 900,
		image: "https://m.media-amazon.com/images/I/51FKGDCt2RL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg",
		features: ["Breathable fabric", "Durable handles", "Foldable design", "Multi-purpose storage"],
		description:
			"The Breathable Storage Organizer is crafted with breathable fabric to prevent odors and ensure ventilation. Its foldable design and durable handles make it versatile for storing garments, bedding, or other items, offering multi-purpose storage for your vehicle or home.",
		detailedFeatures: [
			"Breathable polyester-mesh blend",
			"Foldable for compact storage",
			"Durable reinforced handles",
			"3 spacious compartments",
			"Multi-purpose for car or home use",
			"Lightweight at 2.5 lbs",
			'Dimensions: 22" x 13" x 11"',
			"Machine-washable material",
		],
		amazonLink: "https://amzn.to/47vvqY5",
	},
	{
		id: 9,
		slug: "wllwoo-handbag-organizer",
		name: "WLLWOO Handbag & Storage Organizer",
		price: "$42.99",
		rating: 4.7,
		reviews: 1100,
		image: "https://m.media-amazon.com/images/I/71KHXI4+m7L._AC_SX679_.jpg",
		features: ["Handbag storage", "Adjustable compartments", "Sturdy construction", "Easy to install"],
		description:
			"The WLLWOO Handbag & Storage Organizer is designed to keep handbags and other items neatly organized in your vehicle. Its adjustable compartments and sturdy construction make it easy to install between seats or in the trunk, providing a tailored storage solution.",
		detailedFeatures: [
			"Sturdy 900D polyester construction",
			"Adjustable dividers for custom compartments",
			"Easy installation with straps",
			"Ideal for handbags and small items",
			"Water-resistant exterior",
			"Reinforced stitching for durability",
			'Dimensions: 25" x 10" x 12"',
			"Fits most vehicle seats",
		],
		amazonLink: "https://amzn.to/4p3c0Qo",
	},
]

export default function ProductDetailPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === params.slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.dash === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"dash=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);


	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			<main className="pt-24 pb-16">
				{/* Back Button */}
				<div className="container mx-auto px-4 py-6">
					<Button variant="ghost" asChild className="hover:text-primary">
						<Link href="/products">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Products
						</Link>
					</Button>
				</div>

				{/* Product Detail */}
				<section className="container mx-auto px-4 py-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Product Image */}
						<div className="relative">
							<div className="sticky top-24">
								<div className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted">
									<img
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
								</div>
							</div>
						</div>

						{/* Product Info */}
						<div className="space-y-8">
							<div>
								<h1 className="text-4xl md:text-5xl font-sans font-bold mb-4">{product.name}</h1>

								{/* Rating */}
								<div className="flex items-center gap-4 mb-6">
									<div className="flex items-center gap-2">
										<div className="flex">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
														}`}
												/>
											))}
										</div>
										<span className="text-lg font-semibold">{product.rating}</span>
									</div>
									<span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
								</div>

								{/* Price */}
								<div className="mb-6">

								</div>

								{/* Description */}
								<p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
							</div>

							{/* CTA Button */}
							<div className="flex gap-4">
								<Button
									size="lg"
									className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow text-lg px-8 py-6 group"
									asChild
								>
									<a href={product.amazonLink} data-auto>
										<ShoppingCart className="mr-2 h-5 w-5" />
										Buy on Amazon
										<ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
									</a>
								</Button>
							</div>

							{/* Key Features */}
							<div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
								<h3 className="text-xl font-sans font-bold mb-4">Key Features</h3>
								<ul className="space-y-3">
									{product.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-3">
											<Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
											<span className="text-muted-foreground">{feature}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Detailed Specifications */}
							<div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
								<h3 className="text-xl font-sans font-bold mb-4">Detailed Specifications</h3>
								<ul className="space-y-3">
									{product.detailedFeatures.map((feature, index) => (
										<li key={index} className="flex items-start gap-3">
											<span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
											<span className="text-muted-foreground">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Customer Reviews Section */}
				<section className="container mx-auto px-4 py-16">
					<h2 className="text-3xl md:text-4xl font-sans font-bold mb-8 text-center">
						Customer <span className="molten-text">Reviews</span>
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
						{[
							{
								name: "Michael R.",
								rating: 5,
								date: "2 weeks ago",
								comment:
									"Absolutely love this organizer! It's sturdy, well-made, and keeps everything in place. Best purchase I've made for my car.",
								verified: true,
							},
							{
								name: "Sarah K.",
								rating: 5,
								date: "1 month ago",
								comment:
									"Perfect size and quality. The compartments are spacious and the material feels premium. Highly recommend!",
								verified: true,
							},
							{
								name: "David L.",
								rating: 4,
								date: "3 weeks ago",
								comment:
									"Great organizer overall. Does exactly what it's supposed to do. Only minor issue is it's slightly larger than expected.",
								verified: true,
							},
							{
								name: "Jennifer M.",
								rating: 5,
								date: "1 week ago",
								comment:
									"This has completely transformed my trunk! No more rolling groceries or scattered items. Worth every penny.",
								verified: true,
							},
						].map((review, index) => (
							<div key={index} className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
								<div className="flex items-start justify-between mb-3">
									<div>
										<div className="font-semibold">{review.name}</div>
										<div className="text-sm text-muted-foreground">{review.date}</div>
									</div>
									{review.verified && (
										<span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Verified Purchase</span>
									)}
								</div>
								<div className="flex mb-3">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
										/>
									))}
								</div>
								<p className="text-muted-foreground">{review.comment}</p>
							</div>
						))}
					</div>
				</section>

				{/* Related Products CTA */}
				<section className="relative py-20 overflow-hidden">
					<div className="absolute inset-0 lava-bg opacity-30" />
					<div className="relative z-10 container mx-auto px-4 text-center">
						<div className="max-w-3xl mx-auto space-y-6">
							<h2 className="text-4xl md:text-5xl font-sans font-bold">
								Explore More <span className="molten-text">Products</span>
							</h2>
							<p className="text-xl text-muted-foreground">Discover our full range of premium car organizers</p>
							<Button
								size="lg"
								variant="outline"
								className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
								asChild
							>
								<Link href="/products">View All Products</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
