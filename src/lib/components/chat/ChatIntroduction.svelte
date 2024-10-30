<script lang="ts">
	import { env as envPublic } from "$env/dynamic/public";
	import CarbonEarth from "~icons/carbon/earth";
	import CarbonArrowUpRight from "~icons/carbon/arrow-up-right";
	import Logo from "$lib/components/icons/Logo.svelte";
	import { createEventDispatcher } from "svelte";
	import IconGear from "~icons/bi/gear-fill";
	import AnnouncementBanner from "../AnnouncementBanner.svelte";
	import type { Model } from "$lib/types/Model";
	import ModelCardMetadata from "../ModelCardMetadata.svelte";
	import { findCurrentModel } from "$lib/utils/models";
	import { base } from "$app/paths";
	import { useSettingsStore } from "$lib/stores/settings";
	import JSON5 from "json5";
	import { page } from '$app/stores';

	export let currentModel: Model;
	export let models: Model[];

	const settings = useSettingsStore();

	$: currentModelMetadata = findCurrentModel(models, $settings.activeModel);

	const announcementBanners = envPublic.PUBLIC_ANNOUNCEMENT_BANNERS
		? JSON5.parse(envPublic.PUBLIC_ANNOUNCEMENT_BANNERS)
		: [];

	const dispatch = createEventDispatcher<{ message: string }>();

	export let variant: "light" | "dark" = "light";
</script>

<div class="my-auto grid gap-8 lg:grid-cols-3">
	<div class="lg:col-span-1">
		<div>
			<div class="mb-3 flex items-center text-2xl font-semibold">
				<Logo classNames="mr-1 flex-none" />
				{envPublic.PUBLIC_APP_NAME}
				<div
					class="ml-3 flex h-6 items-center rounded-lg border border-gray-100 bg-gray-50 px-2 text-base text-gray-400 dark:border-gray-700/60 dark:bg-gray-800"
				>
				{#if false}
					v{envPublic.PUBLIC_VERSION}
				{:else}
					Beta
				{/if}
				</div>
			</div>
			<p class="text-base text-gray-600 dark:text-gray-400">
				{envPublic.PUBLIC_APP_DESCRIPTION ||
					"Making the community's best AI chat models available to everyone."}
			</p>
		</div>
	</div>
	<div class="lg:col-span-2 lg:pl-24">
		{#each announcementBanners as banner}
			<AnnouncementBanner classNames="mb-4" title={banner.title}>
				<a
					target="_blank"
					href={banner.linkHref}
					class="mr-2 flex items-center underline hover:no-underline">{banner.linkTitle}</a
				>
			</AnnouncementBanner>
		{/each}
		<div class="overflow-hidden rounded-xl border dark:border-gray-800">
			<div class="flex p-3">
{#if true}
				<div>
					<div class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">Thanks for trying Lambda Chat!</div>
					<div class="items-center gap-1.5 max-sm:text-smd mb-4">
						<div
							class="flex items-center gap-5 rounded-xl bg-gray-100 px-3 py-2 text-xs sm:text-sm
							{variant === 'dark'
								? 'text-gray-600 dark:bg-gray-800 dark:text-gray-300'
								: 'text-gray-800 dark:bg-gray-100 dark:text-gray-600'}"
						>
							<CarbonArrowUpRight class="mr-1.5 shrink-0 text-xs text-gray-400" />
							<div class="items-center">
								{#if currentModel.displayName == 'Liquid-AI-40B'}
									<a class="inline-link" href="https://liquid.ai/liquid-foundation-models" target="_blank">Learn about Liquid Foundation Models (LFMs), a new generation of generative AI models built from first principles.</a>
								{:else}
									<a class="inline-link" href="https://lambdalabs.com/blog/unveiling-hermes-3-the-first-fine-tuned-llama-3.1-405b-model-is-on-lambdas-cloud" target="_blank">Learn about Hermes 3, the first fine-tuned Llama 3.1 405B model</a>
								{/if}
							</div>
						</div>
					</div>
					<div class="items-center gap-1.5 max-sm:text-smd mb-4">
						<div
							class="flex items-center gap-5 rounded-xl bg-gray-100 px-3 py-2 text-xs sm:text-sm
							{variant === 'dark'
								? 'text-gray-600 dark:bg-gray-800 dark:text-gray-300'
								: 'text-gray-800 dark:bg-gray-100 dark:text-gray-600'}"
						>
							<CarbonArrowUpRight class="mr-1.5 shrink-0 text-xs text-gray-400" />
							<div class="items-center">
								Want to leverage up to 128k token context length for longer prompt inputs or integrate this model in your application today?
								Go with our <a class="inline-link" href="https://docs.lambdalabs.com/on-demand-cloud/using-the-lambda-chat-completions-api" target="_blank">Chat API</a>!
							</div>
						</div>
					</div>
					<div class="items-center gap-1.5 max-sm:text-smd mb-4">
						<div
							class="flex items-center gap-5 rounded-xl bg-gray-100 px-3 py-2 text-xs sm:text-sm
							{variant === 'dark'
								? 'text-gray-600 dark:bg-gray-800 dark:text-gray-300'
								: 'text-gray-800 dark:bg-gray-100 dark:text-gray-600'}"
						>
							<CarbonArrowUpRight class="mr-1.5 shrink-0 text-xs text-gray-400" />
							<div class="items-center">
								Contact us for questions about our <a class="inline-link" href="https://lambdalabs.com/talk-to-an-engineer?primary_product_interest=Public+Inference+Endpoints" target="_blank">public inference endpoints</a> or if you want to explore
								<a class="inline-link" href="https://lambdalabs.com/talk-to-an-engineer?primary_product_interest=Private+Inference+Endpoints" target="_blank">private endpoints</a>.
							</div>
						</div>
					</div>
					{#if currentModel.displayName != 'Liquid-AI-40B'}
					<div class="items-center gap-1.5 max-sm:text-smd mb-4">
						<div
							class="flex items-center gap-5 rounded-xl bg-gray-100 px-3 py-2 text-xs sm:text-sm
							{variant === 'dark'
								? 'text-gray-600 dark:bg-gray-800 dark:text-gray-300'
								: 'text-gray-800 dark:bg-gray-100 dark:text-gray-600'}"
						>
							<CarbonArrowUpRight class="mr-1.5 shrink-0 text-xs text-gray-400" />
							<div class="items-center">
								Want your own private instance for maximum flexibility and performance?
								<a class="inline-link" href="https://cloud.lambdalabs.com/sign-up" target="_blank">Get started now</a>
							</div>
						</div>
					</div>
					{/if}
				</div>
{:else}
				<div>
					<div class="text-sm text-gray-600 dark:text-gray-400">Current Model</div>
					<div class="flex items-center gap-1.5 font-semibold max-sm:text-smd">
						{#if currentModel.logoUrl}
							<img
								class=" overflown aspect-square size-4 rounded border dark:border-gray-700"
								src={currentModel.logoUrl}
								alt=""
							/>
						{:else}
							<div class="size-4 rounded border border-transparent bg-gray-300 dark:bg-gray-800" />
						{/if}
						{currentModel.displayName}
					</div>
				</div>
				<a
					href="{base}/settings/{currentModel.id}"
					class="btn ml-auto flex h-7 w-7 self-start rounded-full bg-gray-100 p-1 text-xs hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-600"
					><IconGear /></a
				>
{/if}
			</div>
			<ModelCardMetadata variant="dark" model={currentModel} />
		</div>
	</div>
	{#if currentModelMetadata.promptExamples}
		<div class="lg:col-span-3 lg:mt-6">
			<p class="mb-3 text-gray-600 dark:text-gray-300">Examples</p>
			<div class="grid gap-3 lg:grid-cols-3 lg:gap-5">
				{#each currentModelMetadata.promptExamples as example}
					<button
						type="button"
						class="rounded-xl border bg-gray-50 p-3 text-gray-600 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 max-xl:text-sm xl:p-3.5"
						on:click={() => dispatch("message", example.prompt)}
					>
						{example.title}
					</button>
				{/each}
			</div>
		</div>{/if}
	<div class="h-40 sm:h-24" />
</div>

<style>
  .inline-link {
    font-weight: 600;
    display: inline;
    text-decoration: none;
    color: #D200B0;
    cursor: pointer;
  }
  .inline-link:hover {
    text-decoration: underline;
  }
</style>
