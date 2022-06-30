import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Male extends StatelessWidget {
  const Male({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Male.svg');
}
