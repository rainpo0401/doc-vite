import{_ as e,c as t,o as a,a4 as i}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_StandardUniformViewOptions.md","filePath":"comfyui/ADE/ADE_StandardUniformViewOptions.md"}'),n={name:"comfyui/ADE/ADE_StandardUniformViewOptions.md"},s=i(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: StandardUniformViewOptionsNode</li><li>Category: Animate Diff 🎭🅐🅓/context opts/view opts</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>StandardUniformViewOptionsNode 旨在为动画差异化生成一组统一的视图选项。它专注于为动画过程创建一种结构化的方法，确保动画过程中的一致性和统一性。该节点抽象了视图调度的复杂性，为用户提供了一种直接的方法来定义和应用视图参数。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>view_length <ul><li>view_length 参数定义了动画序列中每个视图的长度。它对于确定每个单独视图的范围和细节至关重要，从而影响整体动画的质量和构成。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>view_stride <ul><li>view_stride 参数指定动画中连续视图之间的间隔。它在控制动画节奏和确保视图之间的过渡连贯且视觉上吸引人方面起着重要作用。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>view_overlap <ul><li>view_overlap 参数指示动画中相邻视图之间的重叠量。这对于创建无缝且平滑的动画体验很重要，其中视图之间的过渡不会突然。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>fuse_method <ul><li>fuse_method 参数确定在动画中融合视图时使用的方法。它在视图如何组合方面提供了灵活性，允许不同的视觉效果和对最终输出的创造性控制。</li><li>Comfy dtype: ContextFuseMethod.LIST</li><li>Python dtype: str</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>view_options <ul><li>view_options 输出提供了一组定义动画中视图特性的结构化选项。它封装了诸如视图长度、步长和重叠等参数，这些参数对于动画的执行和最终外观至关重要。</li><li>Comfy dtype: VIEW_OPTS</li><li>Python dtype: ContextOptions</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class StandardUniformViewOptionsNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;view_length&#39;: (&#39;INT&#39;, {&#39;default&#39;: 16, &#39;min&#39;: 1, &#39;max&#39;: LENGTH_MAX}), &#39;view_stride&#39;: (&#39;INT&#39;, {&#39;default&#39;: 1, &#39;min&#39;: 1, &#39;max&#39;: STRIDE_MAX}), &#39;view_overlap&#39;: (&#39;INT&#39;, {&#39;default&#39;: 4, &#39;min&#39;: 0, &#39;max&#39;: OVERLAP_MAX})}, &#39;optional&#39;: {&#39;fuse_method&#39;: (ContextFuseMethod.LIST,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;VIEW_OPTS&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/context opts/view opts&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_options&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_options(self, view_length: int, view_overlap: int, view_stride: int, fuse_method: str=ContextFuseMethod.PYRAMID):</span></span>
<span class="line"><span>        view_options = ContextOptions(context_length=view_length, context_stride=view_stride, context_overlap=view_overlap, context_schedule=ContextSchedules.UNIFORM_STANDARD, fuse_method=fuse_method)</span></span>
<span class="line"><span>        return (view_options,)</span></span></code></pre></div>`,14),o=[s];function l(p,r,d,u,c,h){return a(),t("div",null,o)}const f=e(n,[["render",l]]);export{m as __pageData,f as default};