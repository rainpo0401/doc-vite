import{_ as a,c as l,o as n,a4 as e}from"./chunks/framework.DpC1ZpOZ.js";const f=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_MultivalScaledMask.md","filePath":"comfyui/ADE/ADE_MultivalScaledMask.md"}'),s={name:"comfyui/ADE/ADE_MultivalScaledMask.md"},i=e(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: MultivalScaledMaskNode</li><li>Category: Animate Diff 🎭🅐🅓/multival</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>MultivalScaledMaskNode 类旨在通过在指定范围内缩放给定的掩码张量来转换它。它根据所选的缩放类型应用线性转换或归一化，确保输出掩码适合在动画或可视化应用程序中进行进一步处理。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>min_float_val <ul><li>最小浮点值参数定义了掩码张量缩放范围的下限。它在设置掩码的缩放比例中起着至关重要的作用，确保缩放后的最小值如指定的那样。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>max_float_val <ul><li>最大浮点值参数设置了掩码张量缩放的上限。它对于确定掩码的缩放比例至关重要，确保缩放后的最大值与期望的最大值一致。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>mask <ul><li>掩码参数是一个张量，它将根据指定的最小和最大浮点值进行缩放。它是节点操作的核心元素，因为缩放直接应用于此张量以实现所需的多值效果。</li><li>Comfy dtype: MASK</li><li>Python dtype: torch.Tensor</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>scaling <ul><li>缩放参数确定要应用于掩码张量的缩放类型。它可以是绝对的或相对的，影响如何在指定范围内调整掩码值。</li><li>Comfy dtype: ScaleType.LIST</li><li>Python dtype: str</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>multival <ul><li>MultivalScaledMaskNode 的输出是一个多值张量，代表缩放后的掩码。它非常重要，因为它是节点操作的直接结果，可用于后续的动画或可视化任务。</li><li>Comfy dtype: MULTIVAL</li><li>Python dtype: torch.Tensor</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class MultivalScaledMaskNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;min_float_val&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 0.0, &#39;min&#39;: 0.0, &#39;step&#39;: 0.001}), &#39;max_float_val&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;step&#39;: 0.001}), &#39;mask&#39;: (&#39;MASK&#39;,)}, &#39;optional&#39;: {&#39;scaling&#39;: (ScaleType.LIST,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;MULTIVAL&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/multival&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_multival&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_multival(self, min_float_val: float, max_float_val: float, mask: Tensor, scaling: str=ScaleType.ABSOLUTE):</span></span>
<span class="line"><span>        if isinstance(min_float_val, Iterable):</span></span>
<span class="line"><span>            raise ValueError(f&#39;min_float_val must be type float (no lists allowed here), not {type(min_float_val).__name__}.&#39;)</span></span>
<span class="line"><span>        if isinstance(max_float_val, Iterable):</span></span>
<span class="line"><span>            raise ValueError(f&#39;max_float_val must be type float (no lists allowed here), not {type(max_float_val).__name__}.&#39;)</span></span>
<span class="line"><span>        if scaling == ScaleType.ABSOLUTE:</span></span>
<span class="line"><span>            mask = linear_conversion(mask.clone(), new_min=min_float_val, new_max=max_float_val)</span></span>
<span class="line"><span>        elif scaling == ScaleType.RELATIVE:</span></span>
<span class="line"><span>            mask = normalize_min_max(mask.clone(), new_min=min_float_val, new_max=max_float_val)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            raise ValueError(f&quot;scaling &#39;{scaling}&#39; not recognized.&quot;)</span></span>
<span class="line"><span>        return MultivalDynamicNode.create_multival(self, mask_optional=mask)</span></span></code></pre></div>`,14),t=[i];function o(p,c,r,u,d,m){return n(),l("div",null,t)}const h=a(s,[["render",o]]);export{f as __pageData,h as default};
