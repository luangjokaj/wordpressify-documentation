import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, H2, H3, H4 } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

const pluginsCode = `const pluginsListDev = [
    partialimport,
    postCSSMixins,
    postcssPresetEnv({
        stage: 0,
        features: {
            'nesting-rules': true,
            'color-mod-function': true,
            'custom-media': true,
        },
    }),
];

const pluginsListProd = [
    partialimport,
    postCSSMixins,
    postcssPresetEnv({
        stage: 0,
        features: {
            'nesting-rules': true,
            'color-mod-function': true,
            'custom-media': true,
        },
    }),
    require('cssnano')({
        preset: ['default', {
            discardComments: false,
        }]
    }),
];`;

const sassTaskCode = `function stylesDev() {
    return src('./src/assets/css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: 'node_modules'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/wordpress/wp-content/themes/' + themeName))
        .pipe(browserSync.stream({ match: '**/*.css' }));
}`;

const sassProdTaskCode = `function stylesProd() {
    return src('./src/assets/css/style.scss')
        .pipe(sass({includePaths: 'node_modules'}).on('error', sass.logError))
        .pipe(dest('./dist/themes/' + themeName));
}`;

const themeCssCode = `/*
Theme Name: WordPressify
Theme URI: https://www.wordpressify.co
Author: Luan Gjokaj
Author URI: https://www.riangle.com
Description: WordPressify official theme.
Version: 1.0
Tags: responsive, clean, minimal, modern, documentation
*/`;

function Index({ posts = [] }) {
	return (
		<Page title="CSS, PostCSS and Sass">
			<Space xs={20} lg={40} />
			<H1 size="hero1">CSS, PostCSS and Sass</H1>
			<Space xs={10} lg={30} />
			<H2 size="h1">PostCSS</H2>
			<p>
				By default WordPressify supports{" "}
				<a
					href="http://postcss.org/"
					target="_blank"
					rel="noreferrer noopener"
				>
					PostCSS
				</a>
				, a similar preprocessor to Sass, Less and others but with more
				functionality. On top of that PostCSS is 3x faster than Sass and
				4x faster than Less. Features come in the shape of PostCSS
				plugins. Think of these like using Lego, where each piece is a
				different feature that can transform your CSS in some way.
				PostCSS lets you stick these pieces together so that you can
				build up your own feature set, adding and removing plugins as
				and when you need them.{" "}
				<a
					href="http://cssnext.io/"
					target="_blank"
					rel="noreferrer noopener"
				>
					CSSNext
				</a>{" "}
				is installed by default. Read more about PostCSS{" "}
				<a
					href="https://ashleynolan.co.uk/blog/postcss-a-review"
					target="_blank"
					rel="noreferrer noopener"
				>
					here
				</a>
				.
			</p>
			<Space size={10} />
			<H3>PostCSS Plugins</H3>
			<p>
				WordPressify has two different sets of PostCSS plugins – one for
				the development environment (pluginsListDev) and one for the
				production task (pluginsListProd).
			</p>
			<CodeBlock
				language="js"
				value={pluginsCode}
				description="gulpfile.js"
			/>
			<Space size={20} />
			<H4 size="h1">Writing CSS</H4>
			<p>The starting point for CSS is the file:</p>
			<CodeBlock language="shell" value={`src/assets/css/style.css`} />
			<p>
				The template definitions are located here too. It is also where
				all other imports are included in the stylesheets.
			</p>
			<CodeBlock language="css" value={themeCssCode} />
			<Space size={1} />
			<hr />
			<Space size={10} />
			<H4 size="h1">Sass</H4>
			<p>
				WordPressify is super flexible. You can install Sass and use it
				as the main CSS preprocessor:
			</p>
			<CodeBlock
				language="shell"
				value={`npm install gulp-sass --save-dev`}
			/>
			<p>
				Include Sass in <strong>gulpfile.js</strong>:
			</p>
			<CodeBlock
				language="js"
				value={`const sass = require('gulp-sass');`}
			/>
			<p>Change the gulp tasks stylesDev to:</p>
			<CodeBlock language="js" value={sassTaskCode} />
			<p>
				Also the watch task has to be changed in order to watch for
				.scss filetypes:
			</p>
			<CodeBlock
				language="js"
				value={`watch('./src/assets/css/**/*.scss', stylesDev);`}
			/>
			<p>Change the gulp tasks styleProd to:</p>
			<CodeBlock language="js" value={sassProdTaskCode} />
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/set-up-project"
					as="/docs/set-up-project"
					prev
				>
					Set Up Project
				</DocNav>
				<DocNav
					href="/docs/images-and-fonts"
					as="/docs/images-and-fonts"
					next
				>
					Images and Fonts
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
