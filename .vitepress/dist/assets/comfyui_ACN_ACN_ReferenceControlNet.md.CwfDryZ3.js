import{_ as e,c as t,o as n,a4 as a}from"./chunks/framework.DpC1ZpOZ.js";const h=JSON.parse('{"title":"ACN_ReferenceControlNet","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ACN/ACN_ReferenceControlNet.md","filePath":"comfyui/ACN/ACN_ReferenceControlNet.md"}'),l={name:"comfyui/ACN/ACN_ReferenceControlNet.md"},s=a(`<h1 id="acn-referencecontrolnet" tabindex="-1">ACN_ReferenceControlNet <a class="header-anchor" href="#acn-referencecontrolnet" aria-label="Permalink to &quot;ACN_ReferenceControlNet&quot;">​</a></h1><ul><li>Class name: ReferenceControlNetNode</li><li>Category: Adv-ControlNet 🛂🅐🅒🅝/Reference</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git</a></li></ul><p>ReferenceControlNetNode 类旨在管理控制网络的加载和应用，并带有参考选项。它封装了创建高级控制结构的逻辑，这些结构可用于引导生成模型的行为，基于用户定义的参考类型和风格保真度提供了一个灵活的接口来控制生成过程。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>reference_type <ul><li>参考类型参数决定了要使用的控制网络类型，这对生成输出的风格和行为有显著影响。它对定义控制机制的方法及其对最终结果的影响至关重要。</li><li>Comfy dtype: str</li><li>Python dtype: str</li></ul></li><li>style_fidelity <ul><li>风格保真度参数调整对参考风格的遵循程度，影响输出的风格一致性。它在平衡创造性输出与所需的风格控制水平方面发挥着重要作用。</li><li>Comfy dtype: float</li><li>Python dtype: float</li></ul></li><li>ref_weight <ul><li>ref_weight 参数设置控制网络中参考的权重，直接影响应用控制的强度。对于微调控制对生成过程的影响至关重要。</li><li>Comfy dtype: float</li><li>Python dtype: float</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>CONTROL_NET <ul><li>ReferenceControlNetNode 的输出是一个控制网络对象，它封装了高级控制逻辑。它对于通过应用指定的控制参数将生成模型引导到期望的结果具有重要意义。</li><li>Comfy dtype: ControlBase</li><li>Python dtype: comfy.controlnet.ControlBase</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class ReferenceControlNetNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;reference_type&#39;: (ReferenceType._LIST,), &#39;style_fidelity&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 0.5, &#39;min&#39;: 0.0, &#39;max&#39;: 1.0, &#39;step&#39;: 0.01}), &#39;ref_weight&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;max&#39;: 1.0, &#39;step&#39;: 0.01})}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;CONTROL_NET&#39;,)</span></span>
<span class="line"><span>    FUNCTION = &#39;load_controlnet&#39;</span></span>
<span class="line"><span>    CATEGORY = &#39;Adv-ControlNet 🛂🅐🅒🅝/Reference&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def load_controlnet(self, reference_type: str, style_fidelity: float, ref_weight: float):</span></span>
<span class="line"><span>        ref_opts = ReferenceOptions.create_combo(reference_type=reference_type, style_fidelity=style_fidelity, ref_weight=ref_weight)</span></span>
<span class="line"><span>        controlnet = ReferenceAdvanced(ref_opts=ref_opts, timestep_keyframes=None)</span></span>
<span class="line"><span>        return (controlnet,)</span></span></code></pre></div>`,12),o=[s];function i(r,p,c,d,f,u){return n(),t("div",null,o)}const y=e(l,[["render",i]]);export{h as __pageData,y as default};