import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Navigator extends StatelessWidget {
  const Navigator({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Navigator.svg');
}
