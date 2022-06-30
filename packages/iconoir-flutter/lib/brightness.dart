import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Brightness extends StatelessWidget {
  const Brightness({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Brightness.svg');
}
