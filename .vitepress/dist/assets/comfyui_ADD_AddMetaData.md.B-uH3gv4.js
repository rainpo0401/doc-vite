import{_ as a,c as e,o as n,a4 as t}from"./chunks/framework.DpC1ZpOZ.js";const _=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADD/AddMetaData.md","filePath":"comfyui/ADD/AddMetaData.md"}'),l={name:"comfyui/ADD/AddMetaData.md"},s=t(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: AddMetaData</li><li>Category: Mikey/Meta</li><li>Output node: True</li><li>Repo Ref: <a href="https://github.com/bash-j/mikey_nodes" target="_blank" rel="noreferrer">https://github.com/bash-j/mikey_nodes</a></li></ul><p>AddMetaData节点旨在通过附加文本信息来丰富图像数据。它通过将指定的文本值附加到图像的元数据中来实现这一点，其中可以包括日期或工作流中其他节点的数据等动态元素。该节点在创建全面的元数据方面发挥着关键作用，可以增强图像的实用性和上下文，适用于各种应用场景。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>image <ul><li>图像参数是必不可少的，因为它是节点操作的主要数据对象。它代表了将添加元数据的图像。节点的执行围绕这张图像进行，使其成为过程中的一个基本组成部分。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: PIL.Image or similar image object</li></ul></li><li>label <ul><li>标签参数作为元数据的描述符。它是一个必需字段，为附加到图像的元数据提供文本标识符。这个标签很重要，因为它对正在添加的元数据进行分类和描述。</li><li>Comfy dtype: STRING</li><li>Python dtype: str</li></ul></li><li>text_value <ul><li>文本值参数对节点的功能至关重要，因为它定义了将包含在图像元数据中的特定文本。此文本可以是静态的或动态的，允许以灵活的方式丰富元数据。</li><li>Comfy dtype: STRING</li><li>Python dtype: str</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>prompt <ul><li>可选的提示参数可以用来将动态数据注入到元数据中。当元数据需要来自工作流中其他节点或组件的信息时，它特别有用，允许进行更具交互性和上下文感知的元数据创建过程。</li><li>Comfy dtype: PROMPT</li><li>Python dtype: dict or str</li></ul></li><li>extra_pnginfo <ul><li>额外的PNG信息参数虽然是可选的，但可以提供特定于图像的额外上下文或详细信息。它可以用来存储不属于主要元数据直接部分但对某些应用或分析仍相关的额外信息。</li><li>Comfy dtype: EXTRA_PNGINFO</li><li>Python dtype: dict or str</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>image_with_metadata <ul><li>AddMetaData节点的输出是带有添加元数据的原始图像。这个输出代表了节点处理的成果，其中图像现在已用指定的文本值丰富，准备用于进一步使用或分发。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: PIL.Image or similar image object</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class AddMetaData:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;image&#39;: (&#39;IMAGE&#39;,), &#39;label&#39;: (&#39;STRING&#39;, {&#39;multiline&#39;: False, &#39;placeholder&#39;: &#39;Label for metadata&#39;}), &#39;text_value&#39;: (&#39;STRING&#39;, {&#39;multiline&#39;: True, &#39;placeholder&#39;: &#39;Text to add to metadata&#39;})}, &#39;hidden&#39;: {&#39;prompt&#39;: &#39;PROMPT&#39;, &#39;extra_pnginfo&#39;: &#39;EXTRA_PNGINFO&#39;}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;IMAGE&#39;,)</span></span>
<span class="line"><span>    FUNCTION = &#39;add_metadata&#39;</span></span>
<span class="line"><span>    CATEGORY = &#39;Mikey/Meta&#39;</span></span>
<span class="line"><span>    OUTPUT_NODE = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def add_metadata(self, image, label, text_value, prompt=None, extra_pnginfo=None):</span></span>
<span class="line"><span>        label = search_and_replace(label, extra_pnginfo, prompt)</span></span>
<span class="line"><span>        text_value = search_and_replace(text_value, extra_pnginfo, prompt)</span></span>
<span class="line"><span>        if extra_pnginfo is None:</span></span>
<span class="line"><span>            extra_pnginfo = {}</span></span>
<span class="line"><span>        if label in extra_pnginfo:</span></span>
<span class="line"><span>            extra_pnginfo[label] += &#39;, &#39; + text_value</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            extra_pnginfo[label] = text_value</span></span>
<span class="line"><span>        return (image,)</span></span></code></pre></div>`,14),i=[s];function p(o,r,d,u,c,h){return n(),e("div",null,i)}const f=a(l,[["render",p]]);export{_ as __pageData,f as default};
