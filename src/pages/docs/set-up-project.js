import React from "react";
import { Space, H1, H2, H3, H4 } from "cherry-components";
import { useTheme } from "@emotion/react";
import { Page } from "../../components/Pages";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

const fileStructureCode = `├── build/                   # Build files
├── config/                  # Nginx &amp; PHP configs
├── dist/                    # Distribution files
├── src/                     # Source files
│   ├── assets/              # Assets directory
│       ├── css/             # CSS files
│       ├── fonts/           # Fonts directory
│       ├── img/             # Image directory
│       ├── js/              # JavaScript files
│   ├── plugins/             # WordPress plugins
│   ├── theme/               # PHP Template files
└── .babelrc                 # Babel configuration
└── .dockerignore            # Docker ignore file
└── .editorconfig            # Editor code styles
└── .env_example             # Environment variables
└── .gitignore               # Git ignored files
└── .stylelintrc             # Stylelint configuration
└── docker-compose.yml       # Docker files
└── Dockerfile-nodejs        # Docker files
└── Dockerfile-wordpress     # Docker files
└── gulpfile.js              # Gulp configuration
└── LICENSE                  # License agreements
└── package-lock.json        # Packages lock file
└── package.json             # Node.js packages
└── README.md                # You are reading this`;

const themeNameCode = `/* -------------------------------------------------------------------------------------------------
Theme Name
------------------------------------------------------------------------------------------------- */
const themeName = 'wordpressify';
//--------------------------------------------------------------------------------------------------`;

function Index() {
	const theme = useTheme();
	return (
		<Page title="Set Up Project">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Set Up Project</H1>
			<Space xs={10} lg={30} />
			<p>Make sure Docker is running, otherwise the process will fail.</p>
			<CodeBlock
				language="text"
				value={fileStructureCode}
				description="File structure"
			/>
			<Space size={20} />
			<H2 size="h2">Install WordPressify from NPM</H2>
			<p>
				To install WordPressify create a directory for the new WordPress
				website and from there run the command to generate the file
				structure:
			</p>
			<CodeBlock language="shell" value={`npx wordpressify`} />
			<p>
				That’s it 🍾 easy as that. Now start the development workflow:{" "}
				<a href="#start-workflow">
					<stronng>Start workflow</stronng>
				</a>
			</p>
			<Space size={1} />
			<hr />
			<Space size={10} />
			<H3 size="h2">Install WordPressify from Repository</H3>
			<p>
				To install WordPressify you need to clone the repository from
				GitHub:
			</p>
			<CodeBlock
				language="shell"
				value={`git clone https://github.com/luangjokaj/wordpressify`}
			/>
			<p>
				This will clone the repository on your local machine. Navigate
				to the newly created directory.
			</p>
			<p>
				Replace the file: <strong>./package.json</strong> with{" "}
				<strong>./installer/package.json</strong> and continue with the
				dependency installation.
			</p>
			<Space size={1} />
			<hr />
			<Space size={10} />
			<H4 size="h5">Change template name</H4>
			<Space size={10} />
			<p>
				Before starting, open gulpfile.js and edit your template name:
			</p>
			<CodeBlock language="js" value={themeNameCode} />
			<Space size={10} />
			<H4 id="start-workflow" size="h2" theme={theme}>
				Start workflow
			</H4>
			<p>To start the development server run the command:</p>
			<CodeBlock language="shell" value={`npm run start`} />
			<p>
				Alternatively if you don't have NodeJS installed locally, use
				Docker commands:
			</p>
			<CodeBlock language="shell" value={`docker compose up`} />
			<p>You are ready to go! Happy coding! 🤓</p>
			<p>
				Make sure Docker is running, otherwise this ☝ command will
				fail.
			</p>
			<Space size={1} />
			<hr />
			<Space size={10} />
			<H4 size="h5">Rebuild environment</H4>
			<p>
				To rebuild the WordPressify environment, with a fresh
				installation and a clean database run:
			</p>
			<CodeBlock language="shell" value={`npm run rebuild`} />
			<p>
				Alternatively if you don't have NodeJS installed locally, use
				Docker commands:
			</p>
			<CodeBlock language="shell" value={`docker compose down -v && docker compose build`} />

			<Space size={1} />
			<hr />
			<Space size={10} />
			<H4 size="h2">WordPress Plugins</H4>
			<p>
				If you want to add or build WordPress plugins, you can do that
				from the directory:
			</p>
			<CodeBlock language="shell" value={`src/plugins`} />
			<Space size={1} />
			<hr />
			<Space size={10} />
			<H4 size="h2">Production Template</H4>
			<p>To generate your distribution files run the command:</p>
			<CodeBlock language="shell" value={`npm run export`} />
			<p>
				Alternatively if you don't have NodeJS installed locally, use
				Docker commands:
			</p>
			<CodeBlock language="shell" value={`docker compose run --rm nodejs npm run prod`} />
			<p>The template will be saved as a zip file in:</p>
			<CodeBlock language="shell" value={`dist/wordpressify.zip`} />
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/installing-nodejs-and-docker"
					as="/docs/installing-nodejs-and-docker"
					prev
				>
					Installing Node.js and Docker
				</DocNav>
				<DocNav
					href="/docs/css-postcss-and-sass"
					as="/docs/css-postcss-and-sass"
					next
				>
					CSS, PostCSS and Sass
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
