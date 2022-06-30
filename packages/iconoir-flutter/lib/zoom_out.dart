import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ZoomOut extends StatelessWidget {
  const ZoomOut({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ZoomOut.svg');
}
