import React from "react";
import { Space, H1 } from "cherry-components";
import { Page } from "../../components/Pages";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

const list = `├── config/                  # Nginx &amp; PHP configs
└── .babelrc                 # Babel configuration
└── .dockerignore            # Docker ignore file
└── .env                     # Environment variables
└── docker-compose.yml       # Docker files
└── Dockerfile-nodejs        # Docker files
└── Dockerfile-wordpress     # Docker files
└── gulpfile.js              # Gulp configuration
└── package.json             # Node.js packages`;

function Index() {
	return (
		<Page title="Build Changes">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Build Changes</H1>
			<p>
			<Space xs={10} lg={30} />
				Any changes to the followin list of files require a restart of
				the containers.
			</p>
			<CodeBlock language="shell" value={list} />
			<p>
				If you have WordPressify running, exit the process with{" "}
				<strong>CTRL/CMD+C</strong>, and build again by running the
				command:
			</p>
			<CodeBlock language="shell" value={`npm run build`} />
			<p>
				Alternatively if you don't have NodeJS installed locally, use
				Docker commands:
			</p>
			<CodeBlock language="shell" value={`docker compose build`} />
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/external-libraries"
					as="/docs/external-libraries"
					prev
				>
					External Libraries
				</DocNav>
				<DocNav href="/docs/backups" as="/docs/backups" next>
					Backups
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
