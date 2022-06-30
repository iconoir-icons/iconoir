import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WebWindowClose extends StatelessWidget {
  const WebWindowClose({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/WebWindowClose.svg');
}
