import { Box, Group, Paper, PaperProps, Text } from "@mantine/core";
import { HTMLAttributes } from "react";
import { useIsLight } from "~/hooks/theme";
import { Icon } from "../Icon";
import { Spacer } from "../Spacer";
import classes from './style.module.scss';

export interface PanelProps extends PaperProps, HTMLAttributes<HTMLDivElement> {
	title?: string;
	icon?: string;
	rightSection?: React.ReactNode;
}

export function Panel(props: PanelProps) {
	const { children, title, icon, rightSection, ...rest } = props;

	const isLight = useIsLight();
	
	return (
		<Paper
			className={classes.root}
			bg={isLight ? 'white' : 'dark.7'}
			{...rest}
		>
			{props.title !== undefined && props.icon !== undefined && (
				<Group
					px="sm"
					py="xs"
					c={isLight ? 'light.9' : 'light.4'}
					spacing="xs"
					h={48}
					noWrap
				>
					{props.icon && (
						<Icon
							path={props.icon}
						/>
					)}
					<Text weight={600} className={classes.title}>
						{title}
					</Text>
					<Spacer />
					{rightSection}
				</Group>	
			)}
			<Box
				p="sm"
				pt={0}
				pos="relative"
				className={classes.content}
			>
				{children}
			</Box>
		</Paper>
	);
}