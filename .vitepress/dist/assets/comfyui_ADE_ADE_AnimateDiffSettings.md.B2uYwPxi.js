import{_ as a,c as t,o as e,a4 as s}from"./chunks/framework.DpC1ZpOZ.js";const f=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_AnimateDiffSettings.md","filePath":"comfyui/ADE/ADE_AnimateDiffSettings.md"}'),n={name:"comfyui/ADE/ADE_AnimateDiffSettings.md"},i=s(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: AnimateDiffSettingsNode</li><li>Category: Animate Diff 🎭🅐🅓/ad settings</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>AnimateDiffSettingsNode 旨在生成用于调整场景差异的动画设置。它封装了调整位置嵌入和权重的逻辑，这些对于动画过程至关重要。该节点的主要功能是提供一种结构化的方法来动画化差异，确保调整在整个动画序列中一致且有效地应用。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>pe_adjust <ul><li>pe_adjust 参数允许对动画中的位置嵌入进行微调。这对于实现动画元素所需的空间分布和运动至关重要。此参数直接影响动画的空间方面如何呈现，影响动画场景的整体质量和连贯性。</li><li>Comfy dtype: PE_ADJUST</li><li>Python dtype: Union[AdjustGroup, None]</li></ul></li><li>weight_adjust <ul><li>weight_adjust 参数用于修改与动画元素相关联的权重。它在控制动画效果的强度和焦点方面起着重要作用。通过调整权重，节点可以增强或减弱动画的特定方面，从而获得更细致和针对性的视觉结果。</li><li>Comfy dtype: WEIGHT_ADJUST</li><li>Python dtype: Union[AdjustGroup, None]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>ad_settings <ul><li>ad_settings 输出提供了一套根据输入参数调整的全面动画设置。这个输出对于动画流水线的后续步骤至关重要，因为它决定了动画差异将如何在最终渲染的场景中体现。</li><li>Comfy dtype: AD_SETTINGS</li><li>Python dtype: AnimateDiffSettings</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class AnimateDiffSettingsNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;optional&#39;: {&#39;pe_adjust&#39;: (&#39;PE_ADJUST&#39;,), &#39;weight_adjust&#39;: (&#39;WEIGHT_ADJUST&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;AD_SETTINGS&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/ad settings&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;get_ad_settings&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_ad_settings(self, pe_adjust: AdjustGroup=None, weight_adjust: AdjustGroup=None):</span></span>
<span class="line"><span>        return (AnimateDiffSettings(adjust_pe=pe_adjust, adjust_weight=weight_adjust),)</span></span></code></pre></div>`,12),l=[i];function o(p,u,d,r,c,h){return e(),t("div",null,l)}const m=a(n,[["render",o]]);export{f as __pageData,m as default};
