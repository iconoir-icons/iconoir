import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Metro extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Metro({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 20H11.5L9.77639 23.4472C9.607 23.786 9.26074 24 8.88197 24H8.11803C7.37465 24 6.89116 23.2177 7.22361 22.5528L8.5 20Z" fill="currentColor"/>
<path d="M15.5 20H12.5L14.2236 23.4472C14.393 23.786 14.7393 24 15.118 24H15.882C16.6253 24 17.1088 23.2177 16.7764 22.5528L15.5 20Z" fill="currentColor"/>
<path d="M14 16.01L14.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16.01L10.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12V15C22 17.7614 19.7614 20 17 20H7C4.23858 20 2 17.7614 2 15V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 12V15C18 17.7614 15.7614 20 13 20H11C8.23858 20 6 17.7614 6 15V12C6 9.23858 8.23858 7 11 7H13C15.7614 7 18 9.23858 18 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.7857 10H12.2143C13.2005 10 14 10.7995 14 11.7857C14 11.9041 13.9041 12 13.7857 12H10.2143C10.0959 12 10 11.9041 10 11.7857C10 10.7995 10.7995 10 11.7857 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
