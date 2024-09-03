import{_ as a,c as n,o as s,a4 as l}from"./chunks/framework.DpC1ZpOZ.js";const d=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_MultivalDynamic.md","filePath":"comfyui/ADE/ADE_MultivalDynamic.md"}'),e={name:"comfyui/ADE/ADE_MultivalDynamic.md"},t=l(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: MultivalDynamicNode</li><li>Category: Animate Diff 🎭🅐🅓/multival</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>MultivalDynamicNode 类旨在动画框架中动态生成和操作多值数据。它是创建复杂动画的关键组件，允许用户指定一系列值，这些值可以应用于动画的不同方面，如角色运动或场景转换。该节点的功能围绕 &#39;create_multival&#39; 方法展开，该方法智能处理单个和可迭代输入值，并确保输出格式适合下游处理。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>float_val <ul><li>参数 &#39;float_val&#39; 对于定义节点将用于创建多值数据的基值或值序列至关重要。它既可以接受单个浮点数，也可以接受浮点数的可迭代对象，这在动画场景的不同方面提供了高度的灵活性。该参数对节点执行的影响很大，因为它直接影响输出值的范围和性质。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: Union[float, List[float]]</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>mask_optional <ul><li>参数 &#39;mask_optional&#39; 用于将掩码应用于节点生成的多值数据。这是一个可选的张量，当提供时，允许在动画的不同元素上选择性地应用 &#39;float_val&#39;。这个参数通过启用条件或部分动画效果来增强节点的功能，为最终动画增添了深度。</li><li>Comfy dtype: MASK</li><li>Python dtype: Optional[torch.Tensor]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>multival <ul><li>输出 &#39;multival&#39; 表示已处理的多值数据，可供动画流水线使用。它是一个张量，包含了由 &#39;float_val&#39; 参数指定的动态值范围，可能会被 &#39;mask_optional&#39; 参数修改。这个输出很重要，因为它构成了进一步动画开发的基础，并且可以直接集成到渲染过程中。</li><li>Comfy dtype: MULTIVAL</li><li>Python dtype: torch.Tensor</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class MultivalDynamicNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;float_val&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;step&#39;: 0.001})}, &#39;optional&#39;: {&#39;mask_optional&#39;: (&#39;MASK&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;MULTIVAL&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/multival&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_multival&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_multival(self, float_val: Union[float, list[float]]=1.0, mask_optional: Tensor=None):</span></span>
<span class="line"><span>        float_is_iterable = False</span></span>
<span class="line"><span>        if isinstance(float_val, Iterable):</span></span>
<span class="line"><span>            float_is_iterable = True</span></span>
<span class="line"><span>            float_val = list(float_val)</span></span>
<span class="line"><span>            if mask_optional is not None:</span></span>
<span class="line"><span>                if len(float_val) &lt; mask_optional.shape[0]:</span></span>
<span class="line"><span>                    float_val = float_val + float_val[-1] * (mask_optional.shape[0] - len(float_val))</span></span>
<span class="line"><span>                if mask_optional.shape[0] &lt; len(float_val):</span></span>
<span class="line"><span>                    mask_optional = extend_to_batch_size(mask_optional, len(float_val))</span></span>
<span class="line"><span>                float_val = float_val[:mask_optional.shape[0]]</span></span>
<span class="line"><span>            float_val: Tensor = torch.tensor(float_val).unsqueeze(-1).unsqueeze(-1)</span></span>
<span class="line"><span>        if mask_optional is not None:</span></span>
<span class="line"><span>            mask_optional = mask_optional.clone()</span></span>
<span class="line"><span>            if float_is_iterable:</span></span>
<span class="line"><span>                mask_optional = mask_optional[:] * float_val.to(mask_optional.dtype).to(mask_optional.device)</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                mask_optional = mask_optional * float_val</span></span>
<span class="line"><span>            return (mask_optional,)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            if not float_is_iterable:</span></span>
<span class="line"><span>                return (float_val,)</span></span>
<span class="line"><span>            float_len = float_val.shape[0] if float_is_iterable else 1</span></span>
<span class="line"><span>            shape = (float_len, 1, 1)</span></span>
<span class="line"><span>            mask_optional = torch.ones(shape)</span></span>
<span class="line"><span>            mask_optional = mask_optional[:] * float_val.to(mask_optional.dtype).to(mask_optional.device)</span></span>
<span class="line"><span>            return (mask_optional,)</span></span></code></pre></div>`,14),i=[t];function p(o,c,r,_,u,f){return s(),n("div",null,i)}const h=a(e,[["render",p]]);export{d as __pageData,h as default};
