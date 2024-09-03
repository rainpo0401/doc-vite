import{_ as i,c as s,o as a,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const y=JSON.parse('{"title":"Combine LoRA Hooks [4] 🎭🅐🅓","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_CombineLoraHooksFour.md","filePath":"comfyui/ADE/ADE_CombineLoraHooksFour.md"}'),l={name:"comfyui/ADE/ADE_CombineLoraHooksFour.md"},o=n(`<h1 id="combine-lora-hooks-4-🎭🅐🅓" tabindex="-1">Combine LoRA Hooks [4] 🎭🅐🅓 <a class="header-anchor" href="#combine-lora-hooks-4-🎭🅐🅓" aria-label="Permalink to &quot;Combine LoRA Hooks [4] 🎭🅐🅓&quot;">​</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><ul><li>Class name: ADE_CombineLoraHooksFour</li><li>Category: Animate Diff 🎭🅐🅓/conditioning/combine lora hooks</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>此节点旨在聚合和组合多达四个LoRA挂钩成一个统一的LoRA挂钩组。它有助于整合多个LoRA挂钩的修改，允许在Animate Diff框架中对模型行为进行更复杂和细致的调整。</p><h2 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><ul><li>lora_hook_A <ul><li>表示要组合的第一个LoRA挂钩组。在聚合过程中起关键作用，贡献整体修改。</li><li>Comfy dtype: LORA_HOOK</li><li>Python dtype: LoraHookGroup</li></ul></li><li>lora_hook_B <ul><li>作为组合的第二个LoRA挂钩组。其包含的修改允许进行层叠，增强模型的适应性。</li><li>Comfy dtype: LORA_HOOK</li><li>Python dtype: LoraHookGroup</li></ul></li><li>lora_hook_C <ul><li>第三个LoRA挂钩组，增加了另一层定制，进一步优化了模型行为。</li><li>Comfy dtype: LORA_HOOK</li><li>Python dtype: LoraHookGroup</li></ul></li><li>lora_hook_D <ul><li>表示第四个也是最后一个要组合的LoRA挂钩组，完成了修改集，使模型能够进行全面调整。</li><li>Comfy dtype: LORA_HOOK</li><li>Python dtype: LoraHookGroup</li></ul></li></ul><h2 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h2><ul><li>lora_hook <ul><li>Comfy dtype: LORA_HOOK</li><li>组合多达四个LoRA挂钩后的统一组。此组合挂钩组允许增强和更复杂的模型条件。</li><li>Python dtype: LoraHookGroup</li></ul></li></ul><h2 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h2><ul><li>Infra type: CPU</li><li>Common nodes: unknown</li></ul><h2 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CombineLoraHookFourOptional</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INPUT_TYPES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;required&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;optional&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;lora_hook_A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LORA_HOOK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;lora_hook_B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LORA_HOOK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;lora_hook_C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LORA_HOOK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;lora_hook_D&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LORA_HOOK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    RETURN_TYPES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LORA_HOOK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    CATEGORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Animate Diff 🎭🅐🅓/conditioning/combine lora hooks&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FUNCTION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;combine_lora_hooks&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> combine_lora_hooks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           lora_hook_A: LoraHookGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lora_hook_B: LoraHookGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           lora_hook_C: LoraHookGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lora_hook_D: LoraHookGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        candidates </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [lora_hook_A, lora_hook_B, lora_hook_C, lora_hook_D]</span></span></code></pre></div>`,14),t=[o];function h(e,k,p,r,d,E){return a(),s("div",null,t)}const c=i(l,[["render",h]]);export{y as __pageData,c as default};