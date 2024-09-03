import{_ as e,c as t,o as n,a4 as a}from"./chunks/framework.DpC1ZpOZ.js";const O=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_ViewsOnlyContextOptions.md","filePath":"comfyui/ADE/ADE_ViewsOnlyContextOptions.md"}'),s={name:"comfyui/ADE/ADE_ViewsOnlyContextOptions.md"},i=a(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: ViewAsContextOptionsNode</li><li>Category: Animate Diff 🎭🅐🅓/context opts</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>ViewAsContextOptionsNode类的&#39;create_options&#39;方法旨在生成一组上下文选项，这些选项决定了视图的上下文如何处理和动画化。它允许自定义动画的开始百分比和保证步骤的数量，确保在不同上下文之间平滑渡。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>view_opts_req <ul><li>参数&#39;view_opts_req&#39;对于定义动画上下文所需的视图选项至关重要。它为上下文在动画框架内的解释和操作奠定了基础。</li><li>Comfy dtype: VIEW_OPTS</li><li>Python dtype: ContextOptions</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>start_percent <ul><li>参数&#39;start_percent&#39;指定了动画的开始百分比，允许用户控制动画的初始状态。这是一个可选参数，可以微调动画的开始。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>guarantee_steps <ul><li>参数&#39;guarantee_steps&#39;确保动画运行的最小步数，提供了一种保持动画连续性和稳定性的机制。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>prev_context <ul><li>参数&#39;prev_context&#39;允许将先前的上下文选项包含到新的集合中，使方法能够在现有的上下文状态上构建，并促进更复杂或分层的动画设置。</li><li>Comfy dtype: CONTEXT_OPTIONS</li><li>Python dtype: ContextOptionsGroup</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>CONTEXT_OPTS <ul><li>输出&#39;CONTEXT_OPTS&#39;代表新创建或更新的上下文选项集，这些选项将用于影响随后的动画或处理步骤。</li><li>Comfy dtype: CONTEXT_OPTIONS</li><li>Python dtype: ContextOptionsGroup</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class ViewAsContextOptionsNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;view_opts_req&#39;: (&#39;VIEW_OPTS&#39;,)}, &#39;optional&#39;: {&#39;start_percent&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 0.0, &#39;min&#39;: 0.0, &#39;max&#39;: 1.0, &#39;step&#39;: 0.001}), &#39;guarantee_steps&#39;: (&#39;INT&#39;, {&#39;default&#39;: 1, &#39;min&#39;: 0, &#39;max&#39;: BIGMAX}), &#39;prev_context&#39;: (&#39;CONTEXT_OPTIONS&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;CONTEXT_OPTIONS&#39;,)</span></span>
<span class="line"><span>    RETURN_NAMES = (&#39;CONTEXT_OPTS&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/context opts&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_options&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_options(self, view_opts_req: ContextOptions, start_percent: float=0.0, guarantee_steps: int=1, prev_context: ContextOptionsGroup=None):</span></span>
<span class="line"><span>        if prev_context is None:</span></span>
<span class="line"><span>            prev_context = ContextOptionsGroup()</span></span>
<span class="line"><span>        prev_context = prev_context.clone()</span></span>
<span class="line"><span>        context_options = ContextOptions(context_schedule=ContextSchedules.VIEW_AS_CONTEXT, start_percent=start_percent, guarantee_steps=guarantee_steps, view_options=view_opts_req, use_on_equal_length=True)</span></span>
<span class="line"><span>        prev_context.add(context_options)</span></span>
<span class="line"><span>        return (prev_context,)</span></span></code></pre></div>`,14),o=[i];function p(l,r,c,u,_,d){return n(),t("div",null,o)}const f=e(s,[["render",p]]);export{O as __pageData,f as default};