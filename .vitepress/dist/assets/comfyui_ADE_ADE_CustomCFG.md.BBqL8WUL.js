import{_ as a,c as s,o as e,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const h=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_CustomCFG.md","filePath":"comfyui/ADE/ADE_CustomCFG.md"}'),t={name:"comfyui/ADE/ADE_CustomCFG.md"},i=n(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: CustomCFGNode</li><li>Category: Animate Diff 🎭🅐🅓/sample settings</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>CustomCFGNode 是一个用于创建动画和采样设置的自定义控制流图（CFG）的节点。它允许用户定义具有特定多值配置的关键帧，这些配置决定了采样过程的行为。该节点为用户提供了一个高级接口，使用户能够自定义动画流程，而无需深入了解底层模型操作的细节。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>cfg_multival <ul><li>cfg_multival 参数对于在动画中定义特定关键帧的多值配置至关重要。它决定了关键帧的属性如何影响采样过程。此参数对于实现所需的动画效果和控制生成样本中的可变性至关重要。</li><li>Comfy dtype: MULTIVAL</li><li>Python dtype: Union[float, torch.Tensor]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>CUSTOM_CFG <ul><li>输出 CUSTOM_CFG 表示已自定义的关键帧组，用于控制采样过程。它封装了多值配置及其对应的开始百分比，允许对动画的进展和不同样本的生成进行细粒度控制。</li><li>Comfy dtype: CUSTOM_CFG</li><li>Python dtype: CustomCFGKeyframeGroup</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class CustomCFGNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;cfg_multival&#39;: (&#39;MULTIVAL&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;CUSTOM_CFG&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/sample settings&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_custom_cfg&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_custom_cfg(self, cfg_multival: Union[float, Tensor]):</span></span>
<span class="line"><span>        keyframe = CustomCFGKeyframe(cfg_multival=cfg_multival)</span></span>
<span class="line"><span>        cfg_custom = CustomCFGKeyframeGroup()</span></span>
<span class="line"><span>        cfg_custom.add(keyframe)</span></span>
<span class="line"><span>        return (cfg_custom,)</span></span></code></pre></div>`,12),l=[i];function o(p,u,c,r,d,m){return e(),s("div",null,l)}const _=a(t,[["render",o]]);export{h as __pageData,_ as default};