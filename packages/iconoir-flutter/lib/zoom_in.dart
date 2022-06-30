import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ZoomIn extends StatelessWidget {
  const ZoomIn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ZoomIn.svg');
}
