import{_ as e,c as t,o as i,a4 as a}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_LoopedUniformViewOptions.md","filePath":"comfyui/ADE/ADE_LoopedUniformViewOptions.md"}'),l={name:"comfyui/ADE/ADE_LoopedUniformViewOptions.md"},n=a(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: LoopedUniformViewOptionsNode</li><li>Category: Animate Diff 🎭🅐🅓/context opts/view opts</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>循环均匀视图选项节点旨在为循环动画生成一组均匀的视图选项。它提供了一种系统化的方法来定义闭环结构内视图的长度、步长和重叠，允许动画序列的可视化一致且连贯。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>view_length <ul><li>视图长度参数指定动画序列中每个视图的长度，这对于确定动画的整体范围和细节至关重要。它直接影响生成的帧数和循环视图的全面性。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>view_stride <ul><li>视图步长参数定义动画中连续视图之间的间隔，影响帧与帧之间过渡的平滑度和连续性。它是创建连贯动画流程的重要因素。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>view_overlap <ul><li>视图重叠参数确定循环中相邻视图之间的重叠程度，这对于保持视觉连续性并防止可能破坏观众体验的突然变化至关重要。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>closed_loop <ul><li>闭环标志指示动画序列是否应形成一个闭环，这对于创建无缝过渡并确保动画可以无结束地连续循环播放至关重要。</li><li>Comfy dtype: BOOLEAN</li><li>Python dtype: bool</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>fuse_method <ul><li>融合方法参数允许指定在组合视图时应用的融合技术，这可以提高动画的视觉质量和连贯性。</li><li>Comfy dtype: ContextFuseMethod.LIST</li><li>Python dtype: str</li></ul></li><li>use_on_equal_length <ul><li>当遇到等长视图时，use_on_equal_length参数决定是否应用特定条件，可能为某些场景优化动画。</li><li>Comfy dtype: BOOLEAN</li><li>Python dtype: bool</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>VIEW_OPTS <ul><li>VIEW_OPTS输出提供一组结构化的选项，定义循环动画视图的参数。这些选项包括长度、步长、重叠以及其他对动画执行和视觉结果至关重要的设置。</li><li>Comfy dtype: VIEW_OPTS</li><li>Python dtype: ContextOptions</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class LoopedUniformViewOptionsNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;view_length&#39;: (&#39;INT&#39;, {&#39;default&#39;: 16, &#39;min&#39;: 1, &#39;max&#39;: LENGTH_MAX}), &#39;view_stride&#39;: (&#39;INT&#39;, {&#39;default&#39;: 1, &#39;min&#39;: 1, &#39;max&#39;: STRIDE_MAX}), &#39;view_overlap&#39;: (&#39;INT&#39;, {&#39;default&#39;: 4, &#39;min&#39;: 0, &#39;max&#39;: OVERLAP_MAX}), &#39;closed_loop&#39;: (&#39;BOOLEAN&#39;, {&#39;default&#39;: False})}, &#39;optional&#39;: {&#39;fuse_method&#39;: (ContextFuseMethod.LIST,), &#39;use_on_equal_length&#39;: (&#39;BOOLEAN&#39;, {&#39;default&#39;: False})}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;VIEW_OPTS&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/context opts/view opts&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_options&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_options(self, view_length: int, view_overlap: int, view_stride: int, closed_loop: bool, fuse_method: str=ContextFuseMethod.PYRAMID, use_on_equal_length=False):</span></span>
<span class="line"><span>        view_options = ContextOptions(context_length=view_length, context_stride=view_stride, context_overlap=view_overlap, context_schedule=ContextSchedules.UNIFORM_LOOPED, closed_loop=closed_loop, fuse_method=fuse_method, use_on_equal_length=use_on_equal_length)</span></span>
<span class="line"><span>        return (view_options,)</span></span></code></pre></div>`,14),o=[n];function s(p,u,d,r,_,c){return i(),t("div",null,o)}const f=e(l,[["render",s]]);export{m as __pageData,f as default};
