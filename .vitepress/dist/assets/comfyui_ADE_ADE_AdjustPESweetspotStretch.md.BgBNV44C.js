import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_AdjustPESweetspotStretch.md","filePath":"comfyui/ADE/ADE_AdjustPESweetspotStretch.md"}'),n={name:"comfyui/ADE/ADE_AdjustPESweetspotStretch.md"},p=s(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: SweetspotStretchPENode</li><li>Category: Animate Diff 🎭🅐🅓/ad settings/pe adjust</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>SweetspotStretchPENode 类旨在通过拉伸或压缩峰值效果（PE）来调整动画的峰值效果。该节点允许对动画的动态进行微调，确保 PE 最佳地定位和缩放以实现所需的视觉效果。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>sweetspot <ul><li>&#39;sweespot&#39; 参数定义了动画中峰值效果的初始长度。这对于确定 PE 调整过程的起始点至关重要。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>new_sweetspot <ul><li>&#39;new_sweetspot&#39; 参数指定了将峰值效果调整到的目标长度。它是控制动画 PE 最终外观的关键因素。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>print_adjustment <ul><li>&#39;print_adjustment&#39; 参数是一个布尔标志，当设置为 True 时，指示节点打印出 PE 调整过程的详细信息。</li><li>Comfy dtype: BOOLEAN</li><li>Python dtype: bool</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>prev_pe_adjust <ul><li>&#39;prev_pe_adjust&#39; 参数是可选的以前调整的组，可以应用于当前的 PE 调整。它允许对复杂动画场景进行调整的链式处理。</li><li>Comfy dtype: PE_ADJUST</li><li>Python dtype: Union[AdjustGroup, None]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>PE_ADJUST <ul><li>节点的输出是一个包含新 PE 调整以及任何先前调整的 AdjustGroup 对象。此对象用于将 PE 调整应用于动画。</li><li>Comfy dtype: PE_ADJUST</li><li>Python dtype: AdjustGroup</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class SweetspotStretchPENode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;sweetspot&#39;: (&#39;INT&#39;, {&#39;default&#39;: 16, &#39;min&#39;: 0, &#39;max&#39;: BIGMAX}), &#39;new_sweetspot&#39;: (&#39;INT&#39;, {&#39;default&#39;: 16, &#39;min&#39;: 0, &#39;max&#39;: BIGMAX}), &#39;print_adjustment&#39;: (&#39;BOOLEAN&#39;, {&#39;default&#39;: False})}, &#39;optional&#39;: {&#39;prev_pe_adjust&#39;: (&#39;PE_ADJUST&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;PE_ADJUST&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/ad settings/pe adjust&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;get_pe_adjust&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_pe_adjust(self, sweetspot: int, new_sweetspot: int, print_adjustment: bool, prev_pe_adjust: AdjustGroup=None):</span></span>
<span class="line"><span>        if prev_pe_adjust is None:</span></span>
<span class="line"><span>            prev_pe_adjust = AdjustGroup()</span></span>
<span class="line"><span>        prev_pe_adjust = prev_pe_adjust.clone()</span></span>
<span class="line"><span>        adjust = AdjustPE(cap_initial_pe_length=sweetspot, interpolate_pe_to_length=new_sweetspot, print_adjustment=print_adjustment)</span></span>
<span class="line"><span>        prev_pe_adjust.add(adjust)</span></span>
<span class="line"><span>        return (prev_pe_adjust,)</span></span></code></pre></div>`,14),i=[p];function l(o,u,d,r,c,_){return a(),t("div",null,i)}const f=e(n,[["render",l]]);export{m as __pageData,f as default};
