import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class XrayView extends StatelessWidget {
  const XrayView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/XrayView.svg');
}
