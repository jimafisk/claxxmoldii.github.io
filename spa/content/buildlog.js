/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '/spa/web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let section;
	let div;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let ul;
	let li0;
	let t4;
	let span0;
	let t5;
	let t6;
	let li1;
	let t7;
	let span1;
	let t8;
	let t9;
	let li2;
	let t10;
	let span2;
	let t11;
	let t12;
	let li3;
	let t13;
	let span3;
	let t14;
	let t15;
	let li4;
	let t16;
	let span4;
	let t17;
	let t18;
	let br0;
	let t19;
	let li5;
	let t20;
	let span5;
	let t21;
	let t22;
	let li6;
	let t23;
	let span6;
	let t24;
	let t25;
	let li7;
	let t26;
	let span7;
	let t27;
	let t28;
	let li8;
	let t29;
	let span8;
	let t30;
	let t31;
	let li9;
	let t32;
	let span9;
	let t33;
	let t34;
	let br1;
	let t35;
	let li10;
	let t36;
	let span10;
	let t37;
	let t38;
	let li11;
	let t39;
	let span11;
	let t40;
	let t41;
	let li12;
	let t42;
	let span12;
	let t43;
	let t44;
	let li13;
	let t45;
	let span13;
	let t46;
	let t47;
	let li14;
	let t48;
	let t49;
	let br2;
	let t50;
	let li15;
	let t51;

	return {
		c() {
			section = element("section");
			div = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			p = element("p");
			t2 = text(/*description*/ ctx[1]);
			t3 = space();
			ul = element("ul");
			li0 = element("li");
			t4 = text("created attributions... ");
			span0 = element("span");
			t5 = text("/2021.3.31");
			t6 = space();
			li1 = element("li");
			t7 = text("created buildLog... ");
			span1 = element("span");
			t8 = text("/2021.3.31");
			t9 = space();
			li2 = element("li");
			t10 = text("moved assets... ");
			span2 = element("span");
			t11 = text("/2021.3.31");
			t12 = space();
			li3 = element("li");
			t13 = text("head, okay... ");
			span3 = element("span");
			t14 = text("/2021.3.31");
			t15 = space();
			li4 = element("li");
			t16 = text("navigation, okay... ");
			span4 = element("span");
			t17 = text("/2021.3.31");
			t18 = space();
			br0 = element("br");
			t19 = space();
			li5 = element("li");
			t20 = text("footer, okay... ");
			span5 = element("span");
			t21 = text("/2021.3.31");
			t22 = space();
			li6 = element("li");
			t23 = text("opening, okay... ");
			span6 = element("span");
			t24 = text("/2021.3.31");
			t25 = space();
			li7 = element("li");
			t26 = text("tags-page, okay... ");
			span7 = element("span");
			t27 = text("/2021.3.31");
			t28 = space();
			li8 = element("li");
			t29 = text("search-page, okay... ");
			span8 = element("span");
			t30 = text("/2021.3.31");
			t31 = space();
			li9 = element("li");
			t32 = text("categories-page, okay... ");
			span9 = element("span");
			t33 = text("/2021.3.31");
			t34 = space();
			br1 = element("br");
			t35 = space();
			li10 = element("li");
			t36 = text("posts layout moved... okay! ");
			span10 = element("span");
			t37 = text("/2021.3.31");
			t38 = space();
			li11 = element("li");
			t39 = text("pager... okay! ");
			span11 = element("span");
			t40 = text("/2021.3.31");
			t41 = space();
			li12 = element("li");
			t42 = text("posts collections... okay! ");
			span12 = element("span");
			t43 = text("/2021.3.31");
			t44 = space();
			li13 = element("li");
			t45 = text("fixed over-all layout... okay! ");
			span13 = element("span");
			t46 = text("/2021.3.31");
			t47 = space();
			li14 = element("li");
			t48 = text("archive... need help.");
			t49 = space();
			br2 = element("br");
			t50 = space();
			li15 = element("li");
			t51 = text("next... git.");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, /*description*/ ctx[1]);
			p_nodes.forEach(detach);
			div_nodes.forEach(detach);
			t3 = claim_space(section_nodes);
			ul = claim_element(section_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t4 = claim_text(li0_nodes, "created attributions... ");
			span0 = claim_element(li0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t5 = claim_text(span0_nodes, "/2021.3.31");
			span0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t6 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t7 = claim_text(li1_nodes, "created buildLog... ");
			span1 = claim_element(li1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t8 = claim_text(span1_nodes, "/2021.3.31");
			span1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t9 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t10 = claim_text(li2_nodes, "moved assets... ");
			span2 = claim_element(li2_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			t11 = claim_text(span2_nodes, "/2021.3.31");
			span2_nodes.forEach(detach);
			li2_nodes.forEach(detach);
			t12 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t13 = claim_text(li3_nodes, "head, okay... ");
			span3 = claim_element(li3_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t14 = claim_text(span3_nodes, "/2021.3.31");
			span3_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			t15 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			t16 = claim_text(li4_nodes, "navigation, okay... ");
			span4 = claim_element(li4_nodes, "SPAN", { class: true });
			var span4_nodes = children(span4);
			t17 = claim_text(span4_nodes, "/2021.3.31");
			span4_nodes.forEach(detach);
			li4_nodes.forEach(detach);
			t18 = claim_space(ul_nodes);
			br0 = claim_element(ul_nodes, "BR", {});
			t19 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", { class: true });
			var li5_nodes = children(li5);
			t20 = claim_text(li5_nodes, "footer, okay... ");
			span5 = claim_element(li5_nodes, "SPAN", { class: true });
			var span5_nodes = children(span5);
			t21 = claim_text(span5_nodes, "/2021.3.31");
			span5_nodes.forEach(detach);
			li5_nodes.forEach(detach);
			t22 = claim_space(ul_nodes);
			li6 = claim_element(ul_nodes, "LI", { class: true });
			var li6_nodes = children(li6);
			t23 = claim_text(li6_nodes, "opening, okay... ");
			span6 = claim_element(li6_nodes, "SPAN", { class: true });
			var span6_nodes = children(span6);
			t24 = claim_text(span6_nodes, "/2021.3.31");
			span6_nodes.forEach(detach);
			li6_nodes.forEach(detach);
			t25 = claim_space(ul_nodes);
			li7 = claim_element(ul_nodes, "LI", { class: true });
			var li7_nodes = children(li7);
			t26 = claim_text(li7_nodes, "tags-page, okay... ");
			span7 = claim_element(li7_nodes, "SPAN", { class: true });
			var span7_nodes = children(span7);
			t27 = claim_text(span7_nodes, "/2021.3.31");
			span7_nodes.forEach(detach);
			li7_nodes.forEach(detach);
			t28 = claim_space(ul_nodes);
			li8 = claim_element(ul_nodes, "LI", { class: true });
			var li8_nodes = children(li8);
			t29 = claim_text(li8_nodes, "search-page, okay... ");
			span8 = claim_element(li8_nodes, "SPAN", { class: true });
			var span8_nodes = children(span8);
			t30 = claim_text(span8_nodes, "/2021.3.31");
			span8_nodes.forEach(detach);
			li8_nodes.forEach(detach);
			t31 = claim_space(ul_nodes);
			li9 = claim_element(ul_nodes, "LI", { class: true });
			var li9_nodes = children(li9);
			t32 = claim_text(li9_nodes, "categories-page, okay... ");
			span9 = claim_element(li9_nodes, "SPAN", { class: true });
			var span9_nodes = children(span9);
			t33 = claim_text(span9_nodes, "/2021.3.31");
			span9_nodes.forEach(detach);
			li9_nodes.forEach(detach);
			t34 = claim_space(ul_nodes);
			br1 = claim_element(ul_nodes, "BR", {});
			t35 = claim_space(ul_nodes);
			li10 = claim_element(ul_nodes, "LI", { class: true });
			var li10_nodes = children(li10);
			t36 = claim_text(li10_nodes, "posts layout moved... okay! ");
			span10 = claim_element(li10_nodes, "SPAN", { class: true });
			var span10_nodes = children(span10);
			t37 = claim_text(span10_nodes, "/2021.3.31");
			span10_nodes.forEach(detach);
			li10_nodes.forEach(detach);
			t38 = claim_space(ul_nodes);
			li11 = claim_element(ul_nodes, "LI", { class: true });
			var li11_nodes = children(li11);
			t39 = claim_text(li11_nodes, "pager... okay! ");
			span11 = claim_element(li11_nodes, "SPAN", { class: true });
			var span11_nodes = children(span11);
			t40 = claim_text(span11_nodes, "/2021.3.31");
			span11_nodes.forEach(detach);
			li11_nodes.forEach(detach);
			t41 = claim_space(ul_nodes);
			li12 = claim_element(ul_nodes, "LI", { class: true });
			var li12_nodes = children(li12);
			t42 = claim_text(li12_nodes, "posts collections... okay! ");
			span12 = claim_element(li12_nodes, "SPAN", { class: true });
			var span12_nodes = children(span12);
			t43 = claim_text(span12_nodes, "/2021.3.31");
			span12_nodes.forEach(detach);
			li12_nodes.forEach(detach);
			t44 = claim_space(ul_nodes);
			li13 = claim_element(ul_nodes, "LI", { class: true });
			var li13_nodes = children(li13);
			t45 = claim_text(li13_nodes, "fixed over-all layout... okay! ");
			span13 = claim_element(li13_nodes, "SPAN", { class: true });
			var span13_nodes = children(span13);
			t46 = claim_text(span13_nodes, "/2021.3.31");
			span13_nodes.forEach(detach);
			li13_nodes.forEach(detach);
			t47 = claim_space(ul_nodes);
			li14 = claim_element(ul_nodes, "LI", { class: true });
			var li14_nodes = children(li14);
			t48 = claim_text(li14_nodes, "archive... need help.");
			li14_nodes.forEach(detach);
			t49 = claim_space(ul_nodes);
			br2 = claim_element(ul_nodes, "BR", {});
			t50 = claim_space(ul_nodes);
			li15 = claim_element(ul_nodes, "LI", { class: true });
			var li15_nodes = children(li15);
			t51 = claim_text(li15_nodes, "next... git.");
			li15_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "title svelte-1arqiz9");
			attr(span0, "class", "date svelte-1arqiz9");
			attr(li0, "class", "svelte-1arqiz9");
			attr(span1, "class", "date svelte-1arqiz9");
			attr(li1, "class", "svelte-1arqiz9");
			attr(span2, "class", "date svelte-1arqiz9");
			attr(li2, "class", "svelte-1arqiz9");
			attr(span3, "class", "date svelte-1arqiz9");
			attr(li3, "class", "svelte-1arqiz9");
			attr(span4, "class", "date svelte-1arqiz9");
			attr(li4, "class", "svelte-1arqiz9");
			attr(span5, "class", "date svelte-1arqiz9");
			attr(li5, "class", "svelte-1arqiz9");
			attr(span6, "class", "date svelte-1arqiz9");
			attr(li6, "class", "svelte-1arqiz9");
			attr(span7, "class", "date svelte-1arqiz9");
			attr(li7, "class", "svelte-1arqiz9");
			attr(span8, "class", "date svelte-1arqiz9");
			attr(li8, "class", "svelte-1arqiz9");
			attr(span9, "class", "date svelte-1arqiz9");
			attr(li9, "class", "svelte-1arqiz9");
			attr(span10, "class", "date svelte-1arqiz9");
			attr(li10, "class", "svelte-1arqiz9");
			attr(span11, "class", "date svelte-1arqiz9");
			attr(li11, "class", "svelte-1arqiz9");
			attr(span12, "class", "date svelte-1arqiz9");
			attr(li12, "class", "svelte-1arqiz9");
			attr(span13, "class", "date svelte-1arqiz9");
			attr(li13, "class", "svelte-1arqiz9");
			attr(li14, "class", "svelte-1arqiz9");
			attr(li15, "class", "svelte-1arqiz9");
			attr(ul, "class", "svelte-1arqiz9");
			attr(section, "class", "buildLog container isGrid svelte-1arqiz9");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div);
			append(div, h1);
			append(h1, t0);
			append(div, t1);
			append(div, p);
			append(p, t2);
			append(section, t3);
			append(section, ul);
			append(ul, li0);
			append(li0, t4);
			append(li0, span0);
			append(span0, t5);
			append(ul, t6);
			append(ul, li1);
			append(li1, t7);
			append(li1, span1);
			append(span1, t8);
			append(ul, t9);
			append(ul, li2);
			append(li2, t10);
			append(li2, span2);
			append(span2, t11);
			append(ul, t12);
			append(ul, li3);
			append(li3, t13);
			append(li3, span3);
			append(span3, t14);
			append(ul, t15);
			append(ul, li4);
			append(li4, t16);
			append(li4, span4);
			append(span4, t17);
			append(ul, t18);
			append(ul, br0);
			append(ul, t19);
			append(ul, li5);
			append(li5, t20);
			append(li5, span5);
			append(span5, t21);
			append(ul, t22);
			append(ul, li6);
			append(li6, t23);
			append(li6, span6);
			append(span6, t24);
			append(ul, t25);
			append(ul, li7);
			append(li7, t26);
			append(li7, span7);
			append(span7, t27);
			append(ul, t28);
			append(ul, li8);
			append(li8, t29);
			append(li8, span8);
			append(span8, t30);
			append(ul, t31);
			append(ul, li9);
			append(li9, t32);
			append(li9, span9);
			append(span9, t33);
			append(ul, t34);
			append(ul, br1);
			append(ul, t35);
			append(ul, li10);
			append(li10, t36);
			append(li10, span10);
			append(span10, t37);
			append(ul, t38);
			append(ul, li11);
			append(li11, t39);
			append(li11, span11);
			append(span11, t40);
			append(ul, t41);
			append(ul, li12);
			append(li12, t42);
			append(li12, span12);
			append(span12, t43);
			append(ul, t44);
			append(ul, li13);
			append(li13, t45);
			append(li13, span13);
			append(span13, t46);
			append(ul, t47);
			append(ul, li14);
			append(li14, t48);
			append(ul, t49);
			append(ul, br2);
			append(ul, t50);
			append(ul, li15);
			append(li15, t51);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);
			if (dirty & /*description*/ 2) set_data(t2, /*description*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props, { description } = $$props, { created } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
		if ("created" in $$props) $$invalidate(2, created = $$props.created);
	};

	return [title, description, created];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, description: 1, created: 2 });
	}
}

export default Component;