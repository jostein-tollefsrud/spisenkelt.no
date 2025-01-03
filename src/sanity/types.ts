/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export interface SanityImagePaletteSwatch {
	_type: 'sanity.imagePaletteSwatch';
	background?: string;
	foreground?: string;
	population?: number;
	title?: string;
}

export interface SanityImagePalette {
	_type: 'sanity.imagePalette';
	darkMuted?: SanityImagePaletteSwatch;
	lightVibrant?: SanityImagePaletteSwatch;
	darkVibrant?: SanityImagePaletteSwatch;
	vibrant?: SanityImagePaletteSwatch;
	dominant?: SanityImagePaletteSwatch;
	lightMuted?: SanityImagePaletteSwatch;
	muted?: SanityImagePaletteSwatch;
}

export interface SanityImageDimensions {
	_type: 'sanity.imageDimensions';
	height?: number;
	width?: number;
	aspectRatio?: number;
}

export interface SanityFileAsset {
	_id: string;
	_type: 'sanity.fileAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	source?: SanityAssetSourceData;
}

export interface Geopoint {
	_type: 'geopoint';
	lat?: number;
	lng?: number;
	alt?: number;
}

export interface Recipe {
	_id: string;
	_type: 'recipe';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	mainImage?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		alt?: string;
		_type: 'image';
	};
	description?: {
		children?: {
			marks?: string[];
			text?: string;
			_type: 'span';
			_key: string;
		}[];
		style?: 'normal';
		listItem?: 'bullet' | 'number';
		markDefs?: {
			href?: string;
			_type: 'link';
			_key: string;
		}[];
		level?: number;
		_type: 'block';
		_key: string;
	}[];
	ingredients?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: 'ingredient';
	}[];
	instructions?: {
		description?: {
			children?: {
				marks?: string[];
				text?: string;
				_type: 'span';
				_key: string;
			}[];
			style?: 'normal';
			listItem?: 'bullet' | 'number';
			markDefs?: {
				href?: string;
				_type: 'link';
				_key: string;
			}[];
			level?: number;
			_type: 'block';
			_key: string;
		}[];
		_type: 'step';
		_key: string;
	}[];
}

export interface Slug {
	_type: 'slug';
	current?: string;
	source?: string;
}

export interface Ingredient {
	_id: string;
	_type: 'ingredient';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
}

export type BlockContent = (| {
			children?: {
				marks?: string[];
				text?: string;
				_type: 'span';
				_key: string;
			}[];
			style?: 'normal' | 'h2' | 'h3' | 'h4' | 'blockquote';
			listItem?: 'bullet' | 'number';
			markDefs?: {
				href?: string;
				_type: 'link';
				_key: string;
			}[];
			level?: number;
			_type: 'block';
			_key: string;
	  }
	| {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			alt?: string;
			_type: 'image';
			_key: string;
	  })[];

export interface SanityImageCrop {
	_type: 'sanity.imageCrop';
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
}

export interface SanityImageHotspot {
	_type: 'sanity.imageHotspot';
	x?: number;
	y?: number;
	height?: number;
	width?: number;
}

export interface SanityImageAsset {
	_id: string;
	_type: 'sanity.imageAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	metadata?: SanityImageMetadata;
	source?: SanityAssetSourceData;
}

export interface SanityAssetSourceData {
	_type: 'sanity.assetSourceData';
	name?: string;
	id?: string;
	url?: string;
}

export interface SanityImageMetadata {
	_type: 'sanity.imageMetadata';
	location?: Geopoint;
	dimensions?: SanityImageDimensions;
	palette?: SanityImagePalette;
	lqip?: string;
	blurHash?: string;
	hasAlpha?: boolean;
	isOpaque?: boolean;
}

export type AllSanitySchemaTypes =
	| SanityImagePaletteSwatch
	| SanityImagePalette
	| SanityImageDimensions
	| SanityFileAsset
	| Geopoint
	| Recipe
	| Slug
	| Ingredient
	| BlockContent
	| SanityImageCrop
	| SanityImageHotspot
	| SanityImageAsset
	| SanityAssetSourceData
	| SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: recipeBySlugQuery
// Query: *[_type == "recipe" && slug.current == $slug][0]{		...,		mainImage {			//groq	hotspot,	crop,	alt,	asset->{		_id,		metadata {			lqip		}	}		},		ingredients[]->{			...		}	}
export type RecipeBySlugQueryResult = {
	_id: string;
	_type: 'recipe';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	mainImage: {
		hotspot: SanityImageHotspot | null;
		crop: SanityImageCrop | null;
		alt: string | null;
		asset: {
			_id: string;
			metadata: {
				lqip: string | null;
			} | null;
		} | null;
	} | null;
	description?: {
		children?: {
			marks?: string[];
			text?: string;
			_type: 'span';
			_key: string;
		}[];
		style?: 'normal';
		listItem?: 'bullet' | 'number';
		markDefs?: {
			href?: string;
			_type: 'link';
			_key: string;
		}[];
		level?: number;
		_type: 'block';
		_key: string;
	}[];
	ingredients: {
		_id: string;
		_type: 'ingredient';
		_createdAt: string;
		_updatedAt: string;
		_rev: string;
		title?: string;
	}[] | null;
	instructions?: {
		description?: {
			children?: {
				marks?: string[];
				text?: string;
				_type: 'span';
				_key: string;
			}[];
			style?: 'normal';
			listItem?: 'bullet' | 'number';
			markDefs?: {
				href?: string;
				_type: 'link';
				_key: string;
			}[];
			level?: number;
			_type: 'block';
			_key: string;
		}[];
		_type: 'step';
		_key: string;
	}[];
} | null;
// Variable: recipesQuery
// Query: *[_type == "recipe"]{		...,		mainImage {			//groq	hotspot,	crop,	alt,	asset->{		_id,		metadata {			lqip		}	}		}	}
export type RecipesQueryResult = {
	_id: string;
	_type: 'recipe';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	mainImage: {
		hotspot: SanityImageHotspot | null;
		crop: SanityImageCrop | null;
		alt: string | null;
		asset: {
			_id: string;
			metadata: {
				lqip: string | null;
			} | null;
		} | null;
	} | null;
	description?: {
		children?: {
			marks?: string[];
			text?: string;
			_type: 'span';
			_key: string;
		}[];
		style?: 'normal';
		listItem?: 'bullet' | 'number';
		markDefs?: {
			href?: string;
			_type: 'link';
			_key: string;
		}[];
		level?: number;
		_type: 'block';
		_key: string;
	}[];
	ingredients?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: 'ingredient';
	}[];
	instructions?: {
		description?: {
			children?: {
				marks?: string[];
				text?: string;
				_type: 'span';
				_key: string;
			}[];
			style?: 'normal';
			listItem?: 'bullet' | 'number';
			markDefs?: {
				href?: string;
				_type: 'link';
				_key: string;
			}[];
			level?: number;
			_type: 'block';
			_key: string;
		}[];
		_type: 'step';
		_key: string;
	}[];
}[];

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
	interface SanityQueries {
		'*[_type == "recipe" && slug.current == $slug][0]{\n\t\t...,\n\t\tmainImage {\n\t\t\t//groq\n\thotspot,\n\tcrop,\n\talt,\n\tasset->{\n\t\t_id,\n\t\tmetadata {\n\t\t\tlqip\n\t\t}\n\t}\n\n\t\t},\n\t\tingredients[]->{\n\t\t\t...\n\t\t}\n\t}': RecipeBySlugQueryResult;
		'\n\t*[_type == "recipe"]{\n\t\t...,\n\t\tmainImage {\n\t\t\t//groq\n\thotspot,\n\tcrop,\n\talt,\n\tasset->{\n\t\t_id,\n\t\tmetadata {\n\t\t\tlqip\n\t\t}\n\t}\n\n\t\t}\n\t}\n': RecipesQueryResult;
	}
}
