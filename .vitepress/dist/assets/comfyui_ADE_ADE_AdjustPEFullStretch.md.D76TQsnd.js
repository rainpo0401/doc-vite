import{_ as a,c as e,o as t,a4 as s}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_AdjustPEFullStretch.md","filePath":"comfyui/ADE/ADE_AdjustPEFullStretch.md"}'),n={name:"comfyui/ADE/ADE_AdjustPEFullStretch.md"},l=s(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: FullStretchPENode</li><li>Category: Animate Diff 🎭🅐🅓/ad settings/pe adjust</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>FullStretchPENode 类旨在修改动画中角色私处的属性。它通过应用各种调整，如拉伸、偏移和限制初始长度来实现这一点。该节点的主要功能是通过这些修改增强动画的视觉效果和细节。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>pe_stretch <ul><li>&#39;pe_stretch&#39; 参数控制应用于角色私处的拉伸程度。这对于定义该区域动画的视觉范围和细节至关重要。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>print_adjustment <ul><li>&#39;print_adjustment&#39; 参数决定是否将调整细节输出到控制台。这对于调试和理解正在做的调整很有用。</li><li>Comfy dtype: BOOLEAN</li><li>Python dtype: bool</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>prev_pe_adjust <ul><li>&#39;prev_pe_adjust&#39; 参数允许对之前的私处设置进行调整。这对于根据之前的调整来完善动画很重要。</li><li>Comfy dtype: PE_ADJUST</li><li>Python dtype: Union[AdjustGroup, None]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>PE_ADJUST <ul><li>输出 &#39;PE_ADJUST&#39; 表示对角色私处所做的最终调整集。它封装了应用于动画的视觉增强。</li><li>Comfy dtype: PE_ADJUST</li><li>Python dtype: AdjustGroup</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class FullStretchPENode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;pe_stretch&#39;: (&#39;INT&#39;, {&#39;default&#39;: 0, &#39;min&#39;: 0, &#39;max&#39;: BIGMAX}), &#39;print_adjustment&#39;: (&#39;BOOLEAN&#39;, {&#39;default&#39;: False})}, &#39;optional&#39;: {&#39;prev_pe_adjust&#39;: (&#39;PE_ADJUST&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;PE_ADJUST&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/ad settings/pe adjust&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;get_pe_adjust&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_pe_adjust(self, pe_stretch: int, print_adjustment: bool, prev_pe_adjust: AdjustGroup=None):</span></span>
<span class="line"><span>        if prev_pe_adjust is None:</span></span>
<span class="line"><span>            prev_pe_adjust = AdjustGroup()</span></span>
<span class="line"><span>        prev_pe_adjust = prev_pe_adjust.clone()</span></span>
<span class="line"><span>        adjust = AdjustPE(motion_pe_stretch=pe_stretch, print_adjustment=print_adjustment)</span></span>
<span class="line"><span>        prev_pe_adjust.add(adjust)</span></span>
<span class="line"><span>        return (prev_pe_adjust,)</span></span></code></pre></div>`,14),i=[l];function p(o,u,r,d,c,_){return t(),e("div",null,i)}const f=a(n,[["render",p]]);export{m as __pageData,f as default};
