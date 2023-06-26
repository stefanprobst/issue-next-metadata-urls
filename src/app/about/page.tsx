const expected = `
<link rel="canonical" href="http://localhost:3000/about">
<meta property="og:url" content="http://localhost:3000/" />
`

export default function AboutPage() {
	return (
		<main>
			<h1>About page</h1>
			<div>
				<p>Check out the canonical url and og:url on this page.</p>
				<p>You should see:</p>
				<pre><code>{expected}</code>
				</pre>
			</div>
		</main>
	)
}
