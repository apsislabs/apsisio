import { Clients } from "components/Clients";
import { Section } from "components/Section";
import { Navbar } from "components/Navbar";
import { Hero } from "components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { Button } from "components/Button";
import { ChevronRight, GitHub, List } from "react-feather";
import { Row } from "components/Row";
import { RepoCard } from "../components/RepoCard";

export const BlogIndexPage = () => {
	return (
		<>
			<Section bordered>
				<Navbar />
			</Section>
			<Section spaced>
				<h1>Blog Index</h1>
			</Section>
		</>
	);
};

export default BlogIndexPage;
