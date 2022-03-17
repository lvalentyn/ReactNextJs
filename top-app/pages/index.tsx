import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, Button, P, HashTags, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);


	return (
		<>
			<Htag tag='h1'>Title </Htag>
			<P> Text1 </P>
			<P fontSize="md"> Text2 </P>
			<P fontSize="lg"> Text3 </P>
			<HashTags size="sm"> Text3 </HashTags>
			<HashTags size="md" color="red"> Text3 </HashTags>
			<HashTags size="sm" color="green"> Text3 </HashTags>
			<HashTags size="md" color="primary"> Text3 </HashTags>
			<Button appearance='primary' arrow="right"> Click </Button>
			<Button appearance='ghost'> Click </Button>
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
