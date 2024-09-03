import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const g=JSON.parse('{"title":"Scale Ref Image and VAE Encode 🎭🅐🅓②","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_UpscaleAndVAEEncode.md","filePath":"comfyui/ADE/ADE_UpscaleAndVAEEncode.md"}'),t={name:"comfyui/ADE/ADE_UpscaleAndVAEEncode.md"},l=n(`<h1 id="scale-ref-image-and-vae-encode-🎭🅐🅓2" tabindex="-1">Scale Ref Image and VAE Encode 🎭🅐🅓② <a class="header-anchor" href="#scale-ref-image-and-vae-encode-🎭🅐🅓2" aria-label="Permalink to &quot;Scale Ref Image and VAE Encode 🎭🅐🅓②&quot;">​</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><ul><li>Class name: ADE_UpscaleAndVAEEncode</li><li>Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/AnimateLCM-I2V</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>ADE_UpscaleAndVAEEncode节点旨在通过首先将图像放大到更高分辨率，然后使用变分自编码器（VAE）将其编码为潜在表示来处理图像。此节点是AnimateDiff套件的一部分，专门用于在应用进一步的生成或转换过程之前增强图像质量。</p><h2 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><ul><li>image <ul><li>表示要放大和编码的输入图像的参数。它在确定最终潜在表示的质量和分辨率方面起着关键作用。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: torch.Tensor</li></ul></li><li>vae <ul><li>指定用于将放大的图像编码为其潜在表示的变分自编码器模型。它影响编码效率和生成的潜在空间的质量。</li><li>Comfy dtype: VAE</li><li>Python dtype: torch.nn.Module</li></ul></li><li>latent_size <ul><li>表示要生成的潜在表示的大小。它决定输出潜在空间的维度。</li><li>Comfy dtype: LATENT</li><li>Python dtype: torch.Tensor</li></ul></li><li>scale_method <ul><li>定义用于放大图像的方法。它影响放大图像的质量。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>crop <ul><li>指定放大后应用的裁剪方法，影响最终图像的构图。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li></ul><h2 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h2><ul><li>latent <ul><li>Comfy dtype: LATENT</li><li>输出是输入图像的潜在表示，由VAE在放大后编码。它以压缩形式捕捉图像的基本特征，适合进一步的生成任务。</li><li>Python dtype: Dict[str, torch.Tensor]</li></ul></li></ul><h2 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h2><ul><li>Infra type: GPU</li><li>Common nodes: unknown</li></ul><h2 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UpscaleAndVaeEncode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INPUT_TYPES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;required&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IMAGE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;vae&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;VAE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;latent_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LATENT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;scale_method&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (ScaleMethods.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST_IMAGE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;crop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (CropMethods.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: CropMethods.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CENTER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    RETURN_TYPES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LATENT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FUNCTION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;preprocess_images&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    CATEGORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Animate Diff 🎭🅐🅓/② Gen2 nodes ②/AnimateLCM-I2V&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> preprocess_images</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, image: torch.Tensor, vae: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VAE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, latent_size: torch.Tensor, scale_method: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, crop: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        b, c, h, w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> latent_size[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].size()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> image.movedim(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comfy.utils.common_upscale(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">samples</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">image, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">upscale_method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scale_method, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">crop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">crop)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> image.movedim(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # now that images are the expected size, VAEEncode them</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># account for old ComfyUI versions (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TODO</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">: remove this when other changes require ComfyUI update)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hasattr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vae, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vae_encode_crop_pixels&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VAEEncode.vae_encode_crop_pixels(image)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        except</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Exception</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            pass</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: vae.encode(image[:,:,:,:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])},)</span></span></code></pre></div>`,13),h=[l];function e(p,k,E,d,r,o){return a(),i("div",null,h)}const c=s(t,[["render",e]]);export{g as __pageData,c as default};