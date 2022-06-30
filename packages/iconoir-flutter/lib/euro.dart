import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Euro extends StatelessWidget {
  const Euro({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Euro.svg');
}
