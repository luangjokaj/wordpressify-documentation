import React from "react";
import { Space, H1, H2 } from "cherry-components";
import { Page } from "../../components/Pages";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index() {
	return (
		<Page title="Deployment">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Deployment</H1>
			<Space xs={10} lg={30} />
			<p>
				The recommended solution is to go with&nbsp;
				<a href="https://wppusher.com/">WP Pusher</a>. It is easy and
				quick to deploy automatically from GitHub or other services. The
				first step is to download the WordPress plugin from:&nbsp;
				<a href="https://wppusher.com/">https://wppusher.com/</a>
			</p>
			<p>
				Then navigate to your WordPress administration on your live site
				and install the downloaded plugin: Plugins -&gt; Add New -&gt; Upload
				Plugin -&gt; Install Now.
			</p>
			<p>
				Activate the plugin and navigate to the plugin page{" "}
				<strong>WP Pusher</strong> . Click on the GitHub or any other
				tab and obtain a token by pressing the button on the page, then
				copy and save the token.
			</p>
			<p>
				At this point go to your terminal, navigate to your WordPressify
				project and generate your distribution files with the command:
			</p>
			<CodeBlock language="shell" value={`npm run export`} />
			<p>
				Alternatively if you don't have NodeJS installed locally, use
				Docker commands:
			</p>
			<CodeBlock
				language="shell"
				value={`docker compose run --rm nodejs npm run prod`}
			/>
			<p>Navigate to your theme distribution files on:</p>
			<CodeBlock language="shell" value={`dist/theme/<themeName>`} />
			<p>
				Create a git repository and push all the files on GitHub. This
				repository will have only the theme distribution files.
			</p>
			<p>
				Once the files are on GitHub you can get back to the WordPress
				administration on the WP Pusher plugin page and follow the{" "}
				<strong>Next Steps</strong>, click on{" "}
				<strong>Install a theme</strong>.
			</p>
			<p>
				On Repository host we choose GitHub, then click on{" "}
				<strong>Pick from GitHub</strong> and choose the newly created
				repository with the distribution files. Then install & activate
				the theme.
			</p>
			<Space size={10} />
			<H2>Automated Deployments</H2>
			<Space size={10} />
			<p>
				<strong>Push-to-Deploy</strong>&nbsp;if you want automatic
				deployments to happen when you do a push to the distribution
				repository. In this case you have to create a Webhook from your
				GitHub’s repository page.
			</p>
			<p>
				First navigate to the WP Pusher plugin page and click on&nbsp;
				<strong>Themes</strong>, it will show you the list of the
				templates you have installed through the plugin itself. Click
				on&nbsp;<strong>Show Push-to-Deploy URL</strong>&nbsp;to get the
				Payload URL.
			</p>
			<p>
				Now get back to GitHub and navigate to your distribution
				repository and click on: Settings -&gt; Webhooks -&gt; Add
				webhook. Now past the URL and click&nbsp;
				<strong>Add webhook</strong>.
			</p>
			<p>
				This should enable automatic deployment on any push to the
				chosen GitHub repository.
			</p>
			<p>
				<strong>Note:</strong> WP Pusher if free only with public
				repositories.
			</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav href="/docs/using-xdebug" as="/docs/using-xdebug" prev>
					Using Xdebug
				</DocNav>
				<DocNav
					href="/docs/troubleshooting"
					as="/docs/troubleshooting"
					next
				>
					Troubleshooting
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
