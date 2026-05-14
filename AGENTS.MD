# AGENTS.md

## Project Overview
- **Project:** Aureon Watches — a fictional premium watch catalog website with product listings, collections, product details, filtering, sorting, and a fake cart UI.
- **Product type:** Static e-commerce catalog website / fictional online store
- **Target user:** Online shoppers, watch enthusiasts, UI design reviewers, and portfolio visitors evaluating e-commerce frontend skills.
- **My skill level:** Intermediate
- **Tech stack:** Vite, React, TypeScript, Tailwind CSS, React Router, Zustand for cart state, local product data, reusable components, responsive product cards, static deployment through GitHub Pages or Vercel.
- **Project status:** Idea / prototype
- **Planned domain:** [domain]
- **Parent site/company:** Fictional brand / portfolio project

## Product Direction
- Build this as a fictional premium watch selling website.
- Focus on a polished e-commerce frontend experience, not real payments or real orders.
- Prioritize product browsing, product details, filtering, sorting, cart UI, and collection pages.
- Use local product data only. Do not add a real backend unless explicitly requested.
- Keep the shopping flow realistic but fake: users can browse, view details, add to cart, update quantities, and remove items.
- Avoid adding payment processing, checkout integrations, authentication, or admin dashboards unless explicitly requested.
- Make the site feel like a premium watch brand, not a generic product grid.

## Design Direction
- **Visual reference:** Premium/luxury watch brand, minimalist product catalog, clean e-commerce UI.
- Aim for a refined, elegant, and modern interface.
- Use strong product imagery, clean typography, generous spacing, and clear product cards.
- Prefer a premium color palette: dark tones, muted neutrals, metallic accents, or clean white luxury styling.
- Use clear navigation, product-focused layouts, and obvious calls to action.
- Avoid cluttered layouts, loud colors, or overly playful design.
- Make the site responsive for desktop, tablet, and mobile screens.

## Collaboration Note
- The project owner may edit the code while work is happening.
- Always check `git status --short` before editing.
- Do not overwrite or revert changes made outside the current task.

## Planned Information Architecture
- **Home**
  - Hero section, featured watch, brand tagline, call-to-action buttons, featured collections.
- **Catalog / Shop**
  - Product grid, category filters, price sorting, search, product cards.
- **Product Details**
  - Product image, name, price, description, specifications, category, add-to-cart button.
- **Collections**
  - Grouped watch collections such as Classic, Luxury, Sport, Minimalist, and Limited Edition.
- **Cart**
  - Fake cart UI, item quantities, subtotal, remove item, clear cart, disabled/fake checkout button.
- **About**
  - Fictional brand story, craftsmanship section, values, and design philosophy.
- **Contact**
  - Fictional contact details, newsletter UI, and simple contact form UI only.
- **Not Found**
  - Clean 404 page with a link back to the shop or home page.

## Suggested Product Data Shape
```ts
type WatchProduct = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: "Classic" | "Luxury" | "Sport" | "Minimalist" | "Limited Edition";
  collection: string;
  image: string;
  description: string;
  material: string;
  strap: string;
  movement: string;
  waterResistance: string;
  caseSize: string;
  featured: boolean;
};

Commands


Install: npm install


Dev: npm run dev


Build: npm run build


Preview: npm run preview


Test: npm test


Lint: npm run lint


Do


Read existing code before modifying anything.


Match existing patterns, naming, and style.


Keep changes small and scoped to what was asked.


Use reusable components for product cards, buttons, layouts, filters, and cart items.


Store product data in a separate local data file.


Keep cart state predictable and easy to understand.


Use TypeScript types for products, cart items, filters, and categories.


Make product pages and catalog pages responsive.


Use accessible buttons, links, forms, and image alt text.


Handle empty states clearly, especially for empty cart, no matching products, and missing product details.


Run the relevant checks after changes.


Don't


Install new dependencies without asking.


Delete or overwrite files without confirming.


Add real payment processing.


Add real checkout, real customer accounts, or real order handling.


Hardcode secrets, API keys, or credentials.


Add a backend unless explicitly requested.


Rewrite working code unless explicitly asked.


Push, deploy, or force-push without permission.


Use copyrighted brand names, real luxury watch logos, or misleading real-world branding.


Make fake claims that imply this is a real store.


When Stuck


If a task is large, break it into steps and confirm the plan first.


If you cannot fix an error in 2 attempts, stop and explain the issue.


Include what you tried, what failed, and what you recommend next.


Testing


Run existing tests after any change.


Add at least one test for new features when practical.


Never skip or delete tests to make things pass.


For catalog workflows, test product listing, filtering, sorting, product details, cart add/remove, quantity changes, and empty states.


Check that product images load correctly and have useful alt text.


Check responsive layout on mobile, tablet, and desktop.


Git


Keep commits small and focused.


Use descriptive commit messages.


Never force push.


Do not revert unrelated user changes.


Response Style


Always respond with clear and concise messages.


Use plain English when explaining to the user.


Avoid long sentences, complex words, or long paragraphs.


Mention changed files and checks run.


