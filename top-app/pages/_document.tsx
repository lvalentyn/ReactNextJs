import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initianProps = await Document.getInitialProps(ctx);
		return { ...initianProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="ru">
				<Head></Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;