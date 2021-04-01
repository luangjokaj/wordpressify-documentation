import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, H2, H3, H4 } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index({ posts = [] }) {
	return (
		<Page title="Using Xdebug">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Using Xdebug</H1>
			<p>
				WordPressify comes with&nbsp;
				<a href="https://xdebug.org/**">Xdebug</a>&nbsp;preconfigured so
				that you can easily debug, profile, and trace your application.
				The following is a description of how to setup Xdebug with
				WordPressify. If you’re on Linux, be sure to check the Xdebug on
				the Linux section below.
			</p>
			<H2 size="h5">Install the xdebug extension</H2>
			<p>
				Install the Xdebug extension for&nbsp;
				<a href="https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc">
					Chrome
				</a>
				,&nbsp;
				<a href="https://addons.mozilla.org/en-GB/firefox/addon/xdebug-helper-for-firefox/">
					FireFox
				</a>
				&nbsp;or&nbsp;
				<a href="https://apps.apple.com/app/safari-xdebug-toggle/id1437227804?mt=12">
					Safari
				</a>
				.
			</p>
			<H3 size="h5">Profiling and tracing</H3>
			<p>
				After installing the extension and running WordPressify, you can
				start profiling and tracing WordPress by simply selecting the
				proper option in the extension. Profiling information can be
				displayed using one of the cachegrind tools as described
				in&nbsp;
				<a href="https://xdebug.org/docs/profiler">
					Xdebug documentation
				</a>
				. The profile and trace data will be logged in the{" "}
				<strong>xdebug</strong>&nbsp;folder.
			</p>
			<H4 size="h5">Step debugging</H4>
			<p>
				If you want to do step debugging, you need to setup your IDE
				accordingly. Make sure to setup your IDE to listen on port 9003
				for Xdebug connections. There are plugins for VS Code, PHPStorm,
				and other IDEs listed&nbsp;
				<a href="https://xdebug.org/docs/step_debug#clients">here</a>.
			</p>
			<p>
				After setting up your IDE, select <strong>Debug</strong> in the
				Xdebug extension and reload the page.
			</p>
			<Space size={1} />
			<hr />
			<Space size={1} />
			<H2>Xdebug on Linux</H2>
			<p>
				After setting up your IDE, select <strong>Debug</strong> in the
				Xdebug extension and reload the page.
			</p>
			<p>Make sure that the containers are running:</p>
			<CodeBlock language="shell" value={`npm run env:start`} />
			<p>
				Find the host ip that docker sees by connecting to the
				WordPressify website from your web browser, and then inspecting
				nginx logs:
			</p>
			<CodeBlock language="shell" value={`docker-compose logs server`} />
			<p>
				The first field will be your host IP address. Copy that host
				address and paste it inside <strong>config/php.ini</strong> as
				the value for <strong>xdebug.remote_host</strong>.
			</p>
			<H3 size="h4">Restart PHP</H3>
			<CodeBlock language="shell" value={`npm run env:restart	`} />
			<p>Xdebug should be working now.</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code-style-rules"
					as="/docs/code-style-rules"
					prev
				>
					Code Style Rules
				</DocNav>
				<DocNav href="/docs/deployment" as="/docs/deployment" next>
					Deployment
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
