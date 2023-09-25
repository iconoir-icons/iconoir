import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PriorityHighSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PriorityHighSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3839_8159)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0454 0.893453C11.5726 0.366246 12.4274 0.366244 12.9546 0.893452L23.1061 11.0449C23.6333 11.5721 23.6333 12.4269 23.1061 12.9541L12.9546 23.1056C12.4274 23.6328 11.5726 23.6328 11.0454 23.1056L0.893941 12.9541C0.366734 12.4269 0.366732 11.5721 0.893941 11.0449L11.0454 0.893453ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12.5675 16.5008C12.8446 16.1929 12.8196 15.7187 12.5117 15.4416C12.2038 15.1645 11.7296 15.1894 11.4525 15.4973L11.4425 15.5084C11.1654 15.8163 11.1904 16.2905 11.4983 16.5676C11.8062 16.8447 12.2804 16.8197 12.5575 16.5119L12.5675 16.5008Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3839_8159">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}