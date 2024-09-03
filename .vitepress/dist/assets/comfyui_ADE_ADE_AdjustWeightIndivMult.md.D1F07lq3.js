import{_ as t,c as a,o as e,a4 as s}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_AdjustWeightIndivMult.md","filePath":"comfyui/ADE/ADE_AdjustWeightIndivMult.md"}'),n={name:"comfyui/ADE/ADE_AdjustWeightIndivMult.md"},i=s(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: WeightAdjustIndivMultNode</li><li>Category: Animate Diff 🎭🅐🅓/ad settings/weight adjust</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>WeightAdjustIndivMultNode 类旨在通过乘法单独修改模型的权重。它提供了一种方法，可以根据预定义的乘数（如 pe_MULT、attn_MULT 和 other_MULT）调整模型的不同部分的权重，允许对模型参数进行微调，而不会改变其底层结构。如果需要，该节点还支持打印调整细节，提供对权重修改过程的透明度。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>pe_MULT <ul><li>pe_MULT 参数是一个乘数，用于调整模型中与位置编码（PE）相关的权重。它在微调模型对输入元素顺序的敏感度中起着关键作用，这可以显著影响模型在依赖序列顺序的任务上的性能。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>attn_MULT <ul><li>attn_MULT 参数是模型中注意力机制权重的乘数。通过调整此值，可以控制注意力机制对模型输出的影响，这对于需要对上下文和元素之间的关系有细致理解的任务至关重要。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>other_MULT <ul><li>other_MULT 参数是一个通用乘数，可以应用于模型中未被 pe_MULT 或 attn_MULT 涵盖的其他权重。它为特定用例或实验设置中调整模型行为提供了灵活性。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>print_adjustment <ul><li>print_adjustment 参数是一个布尔标志，设置为 True 时启用记录权重调整细节。这对于开发人员在调整过程中跟踪和验证对模型权重所做的更改非常有用。</li><li>Comfy dtype: BOOLEAN</li><li>Python dtype: bool</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>prev_weight_adjust <ul><li>prev_weight_adjust 参数允许提供先前的权重调整组，可用于在现有权重调整的基础上进行构建或修改。当需要在迭代调整中保留先前调整步骤的状态并进一步改进时，此参数特别有用。</li><li>Comfy dtype: WEIGHT_ADJUST</li><li>Python dtype: AdjustGroup</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>WEIGHT_ADJUST <ul><li>WeightAdjustIndivMultNode 的输出是一个 AdjustGroup 对象，它封装了应用于模型的结果权重调整。这个对象可以用来进一步完善模型或将调整应用于另一个模型实例。</li><li>Comfy dtype: WEIGHT_ADJUST</li><li>Python dtype: AdjustGroup</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class WeightAdjustIndivMultNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;pe_MULT&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;max&#39;: 2.0, &#39;step&#39;: 1e-06}), &#39;attn_MULT&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;max&#39;: 2.0, &#39;step&#39;: 1e-06}), &#39;other_MULT&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;max&#39;: 2.0, &#39;step&#39;: 1e-06}), &#39;print_adjustment&#39;: (&#39;BOOLEAN&#39;, {&#39;default&#39;: False})}, &#39;optional&#39;: {&#39;prev_weight_adjust&#39;: (&#39;WEIGHT_ADJUST&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;WEIGHT_ADJUST&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/ad settings/weight adjust&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;get_weight_adjust&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_weight_adjust(self, pe_MULT: float, attn_MULT: float, other_MULT: float, print_adjustment: bool, prev_weight_adjust: AdjustGroup=None):</span></span>
<span class="line"><span>        if prev_weight_adjust is None:</span></span>
<span class="line"><span>            prev_weight_adjust = AdjustGroup()</span></span>
<span class="line"><span>        prev_weight_adjust = prev_weight_adjust.clone()</span></span>
<span class="line"><span>        adjust = AdjustWeight(pe_MULT=pe_MULT, attn_MULT=attn_MULT, other_MULT=other_MULT, print_adjustment=print_adjustment)</span></span>
<span class="line"><span>        prev_weight_adjust.add(adjust)</span></span>
<span class="line"><span>        return (prev_weight_adjust,)</span></span></code></pre></div>`,14),l=[i];function p(o,u,d,r,_,h){return e(),a("div",null,l)}const f=t(n,[["render",p]]);export{m as __pageData,f as default};