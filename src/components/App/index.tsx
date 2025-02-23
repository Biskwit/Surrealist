import { ActionIcon, Box, Global, Group, Image, MantineProvider, Paper, Text, Transition } from "@mantine/core";

import surrealistIcon from '~/assets/icon.png';
import { NotificationsProvider } from "@mantine/notifications";
import { Scaffold } from "../Scaffold";
import { useHotkeys } from "@mantine/hooks";
import { actions, store, useStoreValue } from "~/store";
import { useSurrealistTheme } from "~/util/theme";
import { mdiClose } from "@mdi/js";
import { Icon } from "../Icon";
import { useStable } from "~/hooks/stable";
import { MouseEvent } from "react";
import { updateConfig, updateZoom } from "~/util/helpers";

export function App() {
	const update = useStoreValue(state => state.availableUpdate);
	const showUpdate = useStoreValue(state => state.showAvailableUpdate);
	const colorScheme = useStoreValue(state => state.config.theme);
	const defaultScheme = useStoreValue(state => state.nativeTheme);
	const actualTheme = colorScheme == "automatic" ? defaultScheme : colorScheme;
	const mantineTheme = useSurrealistTheme(actualTheme);
	const isLight = actualTheme === 'light';

	const closeUpdate = useStable((e?: MouseEvent) => {
		e?.stopPropagation();
		store.dispatch(actions.hideAvailableUpdate());
	});

	const openRelease = useStable(() => {
		// TODO Implement
		// BrowserOpenURL(`https://github.com/StarlaneStudios/Surrealist/releases/tag/v${update}`);
		closeUpdate(); 
	});

	useHotkeys([
		['ctrl+equal', () => {
			store.dispatch(actions.increaseZoomLevel());
			updateConfig();
			updateZoom();
		}],
		['ctrl+minus', () => {
			store.dispatch(actions.decreaseZoomLevel());
			updateConfig();
			updateZoom();
		}]
	], []);

	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			withCSSVariables
			theme={mantineTheme}
		>
			<NotificationsProvider
				position="bottom-right"
			>
				<Scaffold />
			</NotificationsProvider>

			<Transition
				mounted={showUpdate}
				duration={250}
				transition="slide-up"
				timingFunction="ease"
			>
				{(styles) => (
					<Paper
						onClick={openRelease}
						style={{ ...styles, cursor: 'pointer' }}
						pos="fixed"
						bg="#2f2f40"
						bottom={20}
						left={20}
						p="xs"
					>
						<Group spacing="sm">
							<Image
								src={surrealistIcon}
								style={{ pointerEvents: 'none' }}
								height={32}
								width={32}
								mx={4}
							/>
							<Box miw={200}>
								<Text c="white">
									New release available
								</Text>
								<Text c="gray.5">
									Version {update} is available
								</Text>
							</Box>
							<ActionIcon
								onClick={closeUpdate}
							>
								<Icon path={mdiClose} />
							</ActionIcon>
						</Group>
					</Paper>
				)}
			</Transition>

			{/* Font registration */}
			<Global
				styles={[
					{
						'@font-face': {
							fontFamily: 'Montserrat',
							src: `url('/Montserrat-VariableFont.ttf') format("truetype-variations")`,
							fontWeight: `400 500 600 700`
						}
					},
					{
						'@font-face': {
							fontFamily: 'Montserrat',
							src: `url('/Montserrat-Italic-VariableFont.ttf') format("truetype-variations")`,
							fontWeight: `400 500 600 700`,
							fontStyle: 'italic'
						}
					},
					{
						'@font-face': {
							fontFamily: 'Jetbrains Mono',
							src: `url('/JetBrainsMono-VariableFont.ttf') format("truetype-variations")`,
							fontWeight: `400 700`
						}
					},
					{
						'@font-face': {
							fontFamily: 'Jetbrains Mono',
							src: `url('/JetBrainsMono-Italic-VariableFont.ttf') format("truetype-variations")`,
							fontWeight: `400 700`,
							fontStyle: 'italic'
						}
					}
				]}
			/>

			{/* Global styles */}
			<Global
				styles={{
					'html, body, #root': {
						height: '100%'
					},
					'body': {
						backgroundColor: isLight ? '#f0f1fa' : '#09090a',
						fontWeight: 500
					},
					'.__dbk__container': {
						overflow: 'visible'
					}
				}}
			/>
		</MantineProvider>
	)
}