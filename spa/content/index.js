/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.mjs';

import Grid from '/spa/content/../components/grid.js';
import Uses from '/spa/content/../components/source.js';
import Pager from '/spa/content/../components/pager.js';
import Opening from '/spa/content/../components/opening.js';
import PostCardCollection from '/spa/content/../components/postCardCollection.js';

function create_fragment(ctx) {
	let div1;
	let opening;
	let t0;
	let div0;
	let postcardcollection;
	let t1;
	let pager;
	let current;
	opening = new Opening({ props: { siteName: /*siteName*/ ctx[0] } });

	postcardcollection = new PostCardCollection({
			props: {
				items: /*allPosts*/ ctx[4],
				postRangeLow: /*postRangeLow*/ ctx[3],
				postRangeHigh: /*postRangeHigh*/ ctx[2]
			}
		});

	pager = new Pager({
			props: {
				currentPage: /*currentPage*/ ctx[1],
				totalPages: /*totalPages*/ ctx[5]
			}
		});

	return {
		c() {
			div1 = element("div");
			create_component(opening.$$.fragment);
			t0 = space();
			div0 = element("div");
			create_component(postcardcollection.$$.fragment);
			t1 = space();
			create_component(pager.$$.fragment);
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(opening.$$.fragment, div1_nodes);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(postcardcollection.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach);
			t1 = claim_space(div1_nodes);
			claim_component(pager.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "posts-collection svelte-76hch4");
			attr(div1, "class", "isFlexColumn");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			mount_component(opening, div1, null);
			append(div1, t0);
			append(div1, div0);
			mount_component(postcardcollection, div0, null);
			append(div1, t1);
			mount_component(pager, div1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const opening_changes = {};
			if (dirty & /*siteName*/ 1) opening_changes.siteName = /*siteName*/ ctx[0];
			opening.$set(opening_changes);
			const postcardcollection_changes = {};
			if (dirty & /*postRangeLow*/ 8) postcardcollection_changes.postRangeLow = /*postRangeLow*/ ctx[3];
			if (dirty & /*postRangeHigh*/ 4) postcardcollection_changes.postRangeHigh = /*postRangeHigh*/ ctx[2];
			postcardcollection.$set(postcardcollection_changes);
			const pager_changes = {};
			if (dirty & /*currentPage*/ 2) pager_changes.currentPage = /*currentPage*/ ctx[1];
			pager.$set(pager_changes);
		},
		i(local) {
			if (current) return;
			transition_in(opening.$$.fragment, local);
			transition_in(postcardcollection.$$.fragment, local);
			transition_in(pager.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(opening.$$.fragment, local);
			transition_out(postcardcollection.$$.fragment, local);
			transition_out(pager.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			destroy_component(opening);
			destroy_component(postcardcollection);
			destroy_component(pager);
		}
	};
}

let postsPerPage = 5;

function instance($$self, $$props, $$invalidate) {
	let currentPage;
	let postRangeHigh;
	let postRangeLow;

	let { title } = $$props,
		{ intro } = $$props,
		{ components } = $$props,
		{ content } = $$props,
		{ allContent } = $$props,
		{ siteName } = $$props;

	let allPosts = allContent.filter(content => content.type == "posts");
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / postsPerPage);

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(6, title = $$props.title);
		if ("intro" in $$props) $$invalidate(7, intro = $$props.intro);
		if ("components" in $$props) $$invalidate(8, components = $$props.components);
		if ("content" in $$props) $$invalidate(9, content = $$props.content);
		if ("allContent" in $$props) $$invalidate(10, allContent = $$props.allContent);
		if ("siteName" in $$props) $$invalidate(0, siteName = $$props.siteName);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 512) {
			$: $$invalidate(1, currentPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentPage*/ 2) {
			$: $$invalidate(2, postRangeHigh = currentPage * postsPerPage);
		}

		if ($$self.$$.dirty & /*postRangeHigh*/ 4) {
			$: $$invalidate(3, postRangeLow = postRangeHigh - postsPerPage);
		}
	};

	return [
		siteName,
		currentPage,
		postRangeHigh,
		postRangeLow,
		allPosts,
		totalPages,
		title,
		intro,
		components,
		content,
		allContent
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 6,
			intro: 7,
			components: 8,
			content: 9,
			allContent: 10,
			siteName: 0
		});
	}
}

export default Component;