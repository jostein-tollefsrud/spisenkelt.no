import { PortableText as ReactPortableText } from '@portabletext/react';

type SanityPortableTextProps = React.ComponentProps<typeof ReactPortableText>;

export default function PortableText(props: SanityPortableTextProps) {
	return <ReactPortableText {...props} />;
}
