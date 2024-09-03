import{_ as t,c as e,o as a,a4 as i}from"./chunks/framework.DpC1ZpOZ.js";const h=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_IterationOptsDefault.md","filePath":"comfyui/ADE/ADE_IterationOptsDefault.md"}'),s={name:"comfyui/ADE/ADE_IterationOptsDefault.md"},n=i(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: IterationOptionsNode</li><li>Category: Animate Diff 🎭🅐🅓/iteration opts</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>迭代选项节点类的 <code>create_iter_opts</code> 方法旨在为采样过程配置迭代设置。它允许用户指定迭代次数以及批次和种子的偏移量，这对于控制采样程序并确保生成多样化的输出至关重要。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>iterations <ul><li>参数 &#39;iterations&#39; 定义了采样过程将重复的次数。它是节点操作的一个基本方面，因为它直接影响生成的输出数量。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>iter_batch_offset <ul><li>参数 &#39;iter_batch_offset&#39; 用于调整每次迭代的批次索引。它在采样过程中发挥作用，允许生成的输出序列中存在变化。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>iter_seed_offset <ul><li>参数 &#39;iter_seed_offset&#39; 指定了每次迭代中使用的种子的偏移量。通过改变每次迭代的随机数生成的起始点，这可以在采样中引入多样性。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>ITERATION_OPTS <ul><li>输出 &#39;ITERATION_OPTS&#39; 表示采样过程的配置迭代选项。它封装了用户定义的设置，对于采样工作流中的后续步骤至关重要。</li><li>Comfy dtype: ITERATION_OPTS</li><li>Python dtype: IterationOptions</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class IterationOptionsNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;iterations&#39;: (&#39;INT&#39;, {&#39;default&#39;: 1, &#39;min&#39;: 1})}, &#39;optional&#39;: {&#39;iter_batch_offset&#39;: (&#39;INT&#39;, {&#39;default&#39;: 0, &#39;min&#39;: 0, &#39;max&#39;: BIGMAX}), &#39;iter_seed_offset&#39;: (&#39;INT&#39;, {&#39;default&#39;: 0, &#39;min&#39;: BIGMIN, &#39;max&#39;: BIGMAX})}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;ITERATION_OPTS&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/iteration opts&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_iter_opts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_iter_opts(self, iterations: int, iter_batch_offset: int=0, iter_seed_offset: int=0):</span></span>
<span class="line"><span>        iter_opts = IterationOptions(iterations=iterations, iter_batch_offset=iter_batch_offset, iter_seed_offset=iter_seed_offset)</span></span>
<span class="line"><span>        return (iter_opts,)</span></span></code></pre></div>`,14),o=[n];function l(p,r,u,c,d,f){return a(),e("div",null,o)}const m=t(s,[["render",l]]);export{h as __pageData,m as default};